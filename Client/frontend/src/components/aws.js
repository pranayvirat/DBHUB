import React from "react"
import Navbar from "./Navbar"
import 'bootstrap/dist/css/bootstrap.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import AWS_log from '.././logos/AWS-logo-2.jpg'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Table } from 'react-bootstrap';

import axios from 'axios';
import {useState  } from 'react';
function RenderTable(fullData){
  const {data} = fullData;

  return(
<div style={{
        display: "grid",
        textAlign: "center",
         width: "90%",
        alignItems:"center",
        margin: "0 auto",
        padding: "20px",
        bottom: "50%",
      }}>

        <h4 style={{
          textAlign: "center",
          fontWeight: "bold",
          letterSpacing: "1px",
        }}>
        Centralized data</h4>
        <Table striped bordered hover style={{
          marginTop:"30px",
        }}>
         
           <thead>
            <tr>
              {data && Object.keys(data[0]).map((key, index) => (
                <th key={index}>{key}</th>
              ))}
            </tr>
          </thead>

          
          <tbody style={{
            textAlign: "center",
            

}}>
  
  {data && data.map((row, index) => (
    <tr key={index}>
      {Object.keys(row).map((key, index) => (
      <td key={index}>{row[key]} </td>
      ))}
    </tr>
  ))}
</tbody>
        </Table>
        
      </div> 

  )
}



const AWS = () => {


  const [tableData, setTableData] = useState([]);
  const [formData, setFormData] = useState({
    accessKey : "",
    secretKey : "",
    buketName : "",
    filePath: "",
    fileType: "",
  })
  const [checkedJSON, setCheckedJSON] = useState(false);
  const [checkedParquet, setCheckedParquet] = useState(false);
  const [checkedCSV, setCheckedCSV] = useState(false);
  const [type, setType] = useState("");
  const [showTable, setTable] = useState(false);
  const handleChange = (event) => {
    const { name, value } = event.target; 
    setFormData((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };


  //Handle the Form submit event
  const handleClick1 = (event) => {
    event.preventDefault();
  
if(checkedJSON){
  setType("json");
 }
 else if(checkedParquet){
   setType("parquet");
 }
else if(checkedCSV){
   setType("csv");
 }
 else{
  setType("noFile");
 }

 axios.defaults.baseURL = "http://localhost:3000/api/aws"
 axios.get('/awsRetrieval',{
   params: {
      accessKey: formData.accessKey,
      secretKey: formData.secretKey,
      buketName: formData.buketName,
      filePath: formData.filePath,
      fileType: type,
   },} ).then(response => {
   
   const parsedData = JSON.parse(response.data.output);
   console.log(parsedData);
   if(parsedData.length === 0){
     alert("No such file exists");
   }
   else{
   setTableData(parsedData);
    setTable(true);
  
   }
   
 })
 .catch(error => {
   console.log(error);
 } );
   //Reload the page
   
}

//Handle the checkbox change event and Download data event

const handleClick = async (event) => {
  try {
    event.preventDefault();
    const response = await axios.get('http://localhost:3000/api/aws/aws/download',{
     params:{
       fileType: type,
     },
     responseType: 'blob',
    });
   
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'data.zip');
    document.body.appendChild(link);
    link.click();
  } catch (error) {
    console.error(error);
  }
};


const handleSubmit = (event) => {

  event.preventDefault();
  
}



    return(
        <>
        <Navbar />
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FEFEFA',}}>
          <div style ={{
            display: 'block',
            margin: "60px"
          }}
          >
                    
      <h4>AWS</h4>
      <Card style={{ width: '60rem' }}>
      <Card.Img variant="top" src={AWS_log} alt="AWS_log" style={{width:250, height:250}} />
     
      <ListGroup className="list-group-flush">
        <ListGroup.Item><a href="https://s3.console.aws.amazon.com/" >Learn More</a></ListGroup.Item>
      </ListGroup>
    </Card>
    </div>
    </div>

    <div style={{
      display: 'flex',
      // width: 700,
      // padding: 30
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#FEFEFA',
    }}>
      <div style={{
        display: 'block',
        margin: 30,
      }}>
      <Form style={{
        border: "1px solid grey",
        padding: "20px",
        borderRadius: "8px",
        width: "50rem",
        top: "50%",
        left: "50%",
        

      }} onSubmit = {handleSubmit}>
        <Form.Group>
          <Form.Label style={{
            fontWeight: "bold",
            letterSpacing: "1px",
          }}>Enter Access Key:</Form.Label>
          <Form.Control type="text" name="accessKey" onChange={handleChange}
            placeholder="Enter Access Key " required />
          <br />
        </Form.Group>
        <Form.Group>
          <Form.Label style={{
            fontWeight: "bold",
            letterSpacing: "1px",
          }}>Enter Secret Key:</Form.Label>
          <Form.Control type="password" name="secretKey" onChange={handleChange}
            placeholder="Enter Secret Key " required />
          <br />
        </Form.Group>
        <Form.Group>
          <Form.Label style={{
            fontWeight: "bold",
            letterSpacing: "1px",
          }}>Enter bucket name:</Form.Label>
          <Form.Control type="text" name="bucketName" onChange={handleChange}
            placeholder="Enter Bucket name" required />
          <br />
        </Form.Group>
        <Form.Group>
          <Form.Label style={{
            fontWeight: "bold",
            letterSpacing: "1px",
          }}>Enter file path:</Form.Label>
          <Form.Control type="text" name="filePath" onChange={handleChange}
            placeholder="Enter file path " required />
          <br />
        </Form.Group>
       
       <div style={{
          display: "flex",
          padding: "10px",
          flexDirection: 'row',
      alignItems: 'left',
      justifyContent: 'left',
          
       }}>
         <div style={{
            display: "flex",
            padding: "10px",
            flexDirection: 'row',
      alignItems: 'left',
      justifyContent: 'left',
      
         }}>
        <Form.Check type="checkbox" label="JSON" checked={checkedJSON} onChange={() => setCheckedJSON(!checkedJSON)} />
        </div>
        <div style={{
            display: "flex",
            padding: "10px",
            flexDirection: 'row',
      alignItems: 'left',
      justifyContent: 'left',
      
         }}>
        <Form.Check type="checkbox" label="Parquet" checked={checkedParquet} onChange={() => setCheckedParquet(!checkedParquet)} />
        </div >
        <div style={{
            display: "flex",
            padding: "10px",
            flexDirection: 'row',
      alignItems: 'left',
      justifyContent: 'left',
      
         }}>
        <Form.Check type="checkbox" label="CSV" checked={checkedCSV} onChange={() => setCheckedCSV(!checkedCSV)} />
        </div>
        </div>
        <div style={{
          display: "flex",
          justifyContent: "end",
          padding: "10px"
        }}>
          <Button variant="primary" type="submit"  style={{
            marginRight: "10px",
            backgroundColor: "#00D100",
            border: "none",
            color: "white"

          }} onClick = {handleClick1}  >
            Get Data
          </Button>
         <button style={{
            backgroundColor: "#00D100",
            border: "none",
            color: "white",
            borderRadius: "8px",
            padding: "10px",
            cursor: "pointer",
            fontSize: "16px",
            boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
            

            
          }}onClick={handleClick}>
            Download
            </button>
            

          
          
        </div>
      </Form>
      </div>
      </div>
            

      {showTable  && <RenderTable data={tableData} /> }

  
        </>
      
    )
}

export default AWS;