import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import {Table} from 'react-bootstrap';
import Navbar from '../Navbar'
import {Form} from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
const MySQLConnections = () =>{

    const [connectionList, setConnectionList] = useState([]);
    const [isUpdated, setIsUpdated] = useState('');
    const [updatedUrl, setUpdatedUrl] = useState('');
    const [updatedUsername, setUpdatedUsername] = useState('');
    const [updatePassword, setUpdatePassword] = useState('');

    const getConnections = async() =>{
        try{
            const result = await axios.get("http://localhost:3000/api/db/mysql/getDetails");
            setConnectionList(result.data);
            console.log(setConnectionList);
        }
        catch(error){
            console.error(error);
        }
    }

    const renderUpdateForm = (e) =>(
        <Form onSubmit={(e)=>{updateConnections(e)}}> 
      <Form.Group>
          <Form.Label>URL:</Form.Label>
          <Form.Control type="text" name="url" value={updatedUrl} onChange={e=>(setUpdatedUrl(e.target.value))}
                        placeholder="Enter you new PostgreSQL URL" />
                        <br />
        </Form.Group>
        <Form.Group>
          <Form.Label>Enter your username:</Form.Label>
          <Form.Control type="text"  name="username" value={updatedUsername} onChange={e=>(setUpdatedUsername(e.target.value))}
                        placeholder="Enter your new username "/>
                        <br />
        </Form.Group>
        <Form.Group>
          <Form.Label>Enter your password:</Form.Label>
          <Form.Control type="password"  name="password" value={updatePassword} onChange={e=>{setUpdatePassword(e.target.value)}} placeholder="Enter your new password" />
          <br />
        </Form.Group>
        <Button variant="primary" type="submit" >
           Update Details
        </Button>
        </Form>
    )


    //Function to update connections
    const updateConnections = async (e) =>{
        e.preventDefault();
        try{
            const res = await axios.put(`http://localhost:3000/api/db/postgres/getDetails/${isUpdated}`,{url: updatedUrl, username: updatedUsername, password: updatePassword} )
            const updatedConnectionIndex = connectionList.findIndex(connection => connection._id === isUpdated);
            const updatedConnectionUrl = connectionList[updatedConnectionIndex].url = updatedUrl;
            const updatedConnectionUsername = connectionList[updatedConnectionIndex].username = updatedUsername;
            const updatedConnectionPassword = connectionList[updatedConnectionIndex].password = updatePassword;


            setUpdatedUrl('');
            setUpdatePassword('');
            setUpdatedUsername('');
            console.log(res.data);
            getConnections();
        }catch(error){
            console.error(error);
        }
    }


    //Function to delete connections

    const deleteConnections = async(id) =>{
        try{
        const res = await axios.delete(`http://localhost:3000/api/db/postgres/getDetails/${id}`);
        const newConnectionList = connectionList.filter(connection => connection._id !==id);
        setConnectionList(newConnectionList);
        }catch(err){
            console.error(err);
        }
    }

    useEffect(()=>{
        getConnections();
    },[]);
    return(
        <>
        <h1>MySQL connections</h1>
        <div>{
            connectionList.map(connection =>(<div>
                {
               isUpdated === connection._id
               ?
               renderUpdateForm()
               :
               <>
               <Table striped bordered hover>
               <tbody>
                   <tr>
                       <td>
                           URL
                       </td>
                       <td>
                           {connection.url}
                       </td>
                   </tr>
                   <tr>
                       <td>User Name</td>
                       <td>
                           {connection.username}
                       </td>
                   </tr>
                   <tr>
                       <td>
                           Password
                       </td>
                       <td>
                           {connection.password}
                       </td>
                   </tr>

               </tbody>
           </Table>
           <button onClick={()=>{setIsUpdated(connection._id)}}>
           Update</button>
           <button onClick={() => deleteConnections(connection._id)}>Delete</button>
          </>  } </div>))
       }
           </div>
           </>
    )
 
}

export default MySQLConnections;