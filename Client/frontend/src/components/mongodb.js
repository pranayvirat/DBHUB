import React from "react"
import Navbar from "./Navbar"
import 'bootstrap/dist/css/bootstrap.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import mongo from '.././logos/mongodb.png'
import { Form } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import {Table,Alert} from 'react-bootstrap';
import axios from 'axios';
import { useState } from "react";
import Modal from 'react-bootstrap/Modal';





function RenderModal(mongoData) {
  const [show, setShow] = useState(true);
  const {data} = mongoData;
 
  return (
    <>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        style={{
          width: "2000px",
          height: "100%",
          marginTop: "0px",
          marginRight: "0px",
          marginLeft: "0px",
          marginBottom: "0px",
          overflow: "auto",
          // position: "fixed",
        

        }}
        size = 'xl'
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Postgres DATA
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
 <Table striped bordered hover style={{
          marginTop: "30px",
          marginRight: "0px",
          width: "100%",
        }}>
          <thead>
            <tr>
              {data && Object.keys(data[0]).map((key, index) => (
                <th key={index}>{key}</th>
              ))}
            </tr>
          </thead>

          <tbody style={{

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


        </Modal.Body>
      </Modal>
    </>
  );
}

export default function MongoDB() {



  const [temp,setTemp] = useState('');
  const [tables, setTables] = useState([]);
  const [tableName, setTableName] = useState("");
  const [formData, setFormData] = useState({
    uri: '',
    database: '',
    collection: '',
    fileType: ''
  });
  const [checked, setChecked] = useState(false);
  const [connectionOutput, setConnectionOutput] = useState('');
  const [mongoData, setmongoData] = useState([]);
  const [viewData, setViewData] = useState(false);
  const [type, setType] = useState('noFile');
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('URL value:', formData.url);
  };

  const handleClick = (event) => {
    event.preventDefault();
    console.log('URL value:', formData.uri);
    console.log('Database value:', formData.database);
    axios.defaults.baseURL = "http://localhost:3000"
    axios
      .get("/api/mongo/mongoConnection", {
        params: {
          uri: formData.uri,
          database: formData.database,
        },
      })
      .then(async (result) => {
        setConnectionOutput(result.data.output);
        console.log(result.data);
        //  window.alert(connectionOutput)
       
      });
    
  };
  const [showAlert, setShowAlert] = useState(true);

  const handleCloseAlert = () => setShowAlert(false);


  const handleTables = (event) => {
    event.preventDefault();
    axios.defaults.baseURL = "http://localhost:3000"
    axios.get("/api/mongo/mongoCollection", {
      params: {
        uri: formData.uri,
        database: formData.database,
      },
    })
      .then((result) => {
        //  console.log(result.data.output);
        setTables(result.data.output);
        setTemp(result.data.output);
        console.log(temp)
        //console.log(tables);
      });
  };
  const GetData = (event) => {

    event.preventDefault();
  
      axios.defaults.baseURL = "http://localhost:3000"
      axios.get("/api/mongo/mongoData", {
        params: {
          uri: formData.uri,
          database: formData.database,
          collection: formData.collection,
          type: type
        },
      })
        .then((result) => {

          const parsedData = JSON.parse(result.data.output);
          console.log(parsedData)
          setmongoData(parsedData);
          setViewData(true);
          //console.log(result.data);
        

        });
    
  };
  const handleClick1 = async (event) => {
    try {
      event.preventDefault();
      
      const response = await axios.get('http://localhost:3000/api/db/downloadMongo',{
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
      console.log(type)
    } catch (error) {
      console.error(error);
    }
  };



























  
  return (
    <>
      <Navbar />
      
    </>

  )
}