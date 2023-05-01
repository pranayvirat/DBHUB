import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import {Table} from 'react-bootstrap';
import {Form} from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import './style.css';
const PostgresConnection = () =>{

    const [connectionList, setConnectionList] = useState([]);
    const [isUpdated, setIsUpdated] = useState('');
    const [updatedUrl, setUpdatedUrl] = useState('');
    const [updatedUsername, setUpdatedUsername] = useState('');
    const [updatePassword, setUpdatePassword] = useState('');
//Function to fetch connections
    const getConnections = async() =>{
        try{
            const result = await axios.get("http://54.236.43.43:3000/api/db/postgres/getDetails");
            setConnectionList(result.data);
            console.log(setConnectionList);
        }
        catch(error){
            console.error(error);
        }
    }

    useEffect(()=>{
        getConnections();
    },[]);


   
    return(
        <>
      
       
            </>
    )
 
}

export default PostgresConnection;