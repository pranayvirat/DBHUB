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
  const [checked, setChecked] = useState(false);
  const [connectionOutput, setConnectionOutput] = useState('');
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
    axios.defaults.baseURL="http://localhost:3000"
      axios
      .get("/execute-spark-job", {
        params: {
          url: formData.url,
          username: formData.username,
          password: formData.password,
        },
      })
      .then(async (result) => {
        setConnectionOutput(result.data);
        console.log(result.data);
        window.alert(connectionOutput)
        if(checked){
          try{
          const result = await axios.post("/api/db/postgres/add", {
            
            url: formData.url,
            username: formData.username,
            password: formData.password
            })
             setFormData({
    url: '',
    username: '',
    password: ''
  })

          }catch(error){
            console.error(error);
          }
        }
      });

 
      
      
    }; 

    const handleTables = (event) =>{
      event.preventDefault();
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
        window.prompt("Successfully retrieved tables")
      });
    }; 

  return (
    <div style={{ display: 'block', 
                  width: 700, 
                  padding: 30,  }}>
                    
      <h4>PostgreSQL</h4>
      
      <Card style={{ width: '40rem', backgroundColor: '#ffefd5', top: '50%', left: '100%'   }}>
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



   <h1 style={{left:'100%'}}>PostgreSQL Form</h1>
    <Form onSubmit={handleSubmit} style={{ position: 'absolute', top: '140%', left: '50%',width: 400, transform: 'translate(-50%, -50%)' }}>
      <Form.Group>
          <Form.Label>URL:</Form.Label>
          <Form.Control type="text" name="url" value={formData.url} onChange={handleInputChange}
                        placeholder="Enter PostgreSQL URL" required/>
                        <br />
        </Form.Group>
        <Form.Group>
          <Form.Label>Enter your username:</Form.Label>
          <Form.Control type="text"  name="username" value={formData.username} onChange={handleInputChange}
                        placeholder="Enter your your username " required/>
                        <br />
        </Form.Group>
        <Form.Group>
          <Form.Label>Enter your password:</Form.Label>
          <Form.Control type="password"  name="password" value={formData.password} onChange={handleInputChange} placeholder="Enter your password" required />
          <br />
          <Form.Check type="checkbox" label="Add Connection" checked={checked} onChange={() => setChecked(!checked)} />
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