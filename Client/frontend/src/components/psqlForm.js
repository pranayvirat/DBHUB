import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import PostgreSQL from '.././logos/Postgresql.png'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import {useState} from 'react';
import axios from 'axios'






export default function Details() {

  const [formData, setFormData] = useState ({
    url: '',
    username:'',
    password:''

  });

  const handleInputChange = (event) =>{
    const {name, value } = event.target;
    setFormData({ ...formData,[name]:value});
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('URL value:', formData.url);
  };
  const handleClick =  (event) => {
    event.preventDefault();
    const check_url = formData.url
    const check_username = formData.username
    const check_password = formData.password
    if(check_url.trim() === "" || check_username.trim() === "" || check_password.trim() === ""){
      alert("Please specify values")
    }else{
    axios.defaults.baseURL="http://localhost:3000"
      axios
      .get("/execute-spark-job", {
        params: {
          url: formData.url,
          username: formData.username,
          password: formData.password,
        },
      })
      .then((result) => {
        console.log(result);
        //window.prompt("Connection Successful")
      });
    }
    }; 

    const handleTables = (event) =>{
      event.preventDefault();
      const check_url = formData.url
      const check_username = formData.username
      const check_password = formData.password
      if(check_url.trim() === "" || check_username.trim() === "" || check_password.trim() === ""){
        alert("Please specify values")
      }else{
      axios.defaults.baseURL="http://localhost:3000"
      axios.get("/execute-spark-retrieve-job",{
        params: {
          url: formData.url,
          username: formData.username,
          password: formData.password,
        },
      })
      .then((result) => {
        console.log(result);
        //window.prompt("Successfully retrieved tables")
      });
    }
    }; 

  return (
    <div style={{ display: 'block', 
                  width: 700, 
                  padding: 30 }}>
                    
      <h4>PostgreSQL</h4>
      <Card style={{ width: '40rem' }}>
      <Card.Img variant="top" src={PostgreSQL} alt="PostgreSQL" style={{width:250,height:250}}/>
      <Card.Body>
        <Card.Title>ABOUT</Card.Title>
        <Card.Text>
        PostgreSQL is an open-source object-relational database management system (ORDBMS) that uses SQL. It was created in 1986 and is now maintained by the PostgreSQL Global Development Group. PostgreSQL is commonly referred to as "Postgres".
        <br />
        Some key features of PostgreSQL include:
        <br />
        <ul>
          <li>Support for multiple platforms, including Windows, Linux, and macOS</li>
          <li>Ability to handle complex queries and large amounts of data</li>
          <li>High concurrency and scalability, with support for multiple users and transactions</li>
          <li>ACID compliance, which ensures data integrity and reliability</li>
          <li>Extensibility, with the ability to add custom data types, functions, and operators</li>
          <li>Advanced indexing and query optimization capabilities</li>
        </ul>
        PostgreSQL is also known for its robustness, reliability, and data integrity, making it a popular choice for applications that require high levels of data security and transactional consistency.
        <br />
        PostgreSQL has a large and active community of developers and users, who contribute to its ongoing development and maintenance. It is used by many large organizations and is a popular choice for enterprise-level applications.
        <br />
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item><a href="https://www.postgresql.org/" >Learn More</a></ListGroup.Item>
      </ListGroup>
    </Card>
    <br />




      <Form onSubmit={handleSubmit}> 
      <Form.Group>
          <Form.Label>URL:</Form.Label>
          <Form.Control type="text" name="url" value={formData.url} onChange={handleInputChange}
                        placeholder="Enter PostgreSQL URL" />
                        <br />
        </Form.Group>
        <Form.Group>
          <Form.Label>Enter your username:</Form.Label>
          <Form.Control type="text"  name="username" value={formData.username} onChange={handleInputChange}
                        placeholder="Enter your your username "/>
                        <br />
        </Form.Group>
        <Form.Group>
          <Form.Label>Enter your password:</Form.Label>
          <Form.Control type="password"  name="password" value={formData.password} onChange={handleInputChange} placeholder="Enter your password" />
          <br />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleClick}>
           Check Connection
        </Button>
        <br />
        <br />
        <Button variant="primary" type="submit" onClick={handleTables}>Retrieve tables</Button>
      </Form>
    </div>
  );
}