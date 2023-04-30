import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import MySQL from '.././logos/MySQL.png'
import {useState} from 'react';
import axios from 'axios'



export default function Details() {
  const [tables, setTables] = useState([]);
  const [formData, setFormData] = useState ({
    url: '',
    username:'',
    password:''

  });
  const [checked, setChecked] = useState(false);
  const [resultB, setResult] = useState('');

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
      .get("/execute-spark-job-mysql", {
        params: {
          url: formData.url,
          username: formData.username,
          password: formData.password,
        },
      })
      .then((result) => {
        setResult(result.data);
        console.log(resultB);
        window.alert(resultB)
      });
    }
    }; 

    const HandleTables = (event) =>{
      event.preventDefault();
      const check_url = formData.url
      const check_username = formData.username
      const check_password = formData.password
     
      if(check_url.trim() === "" || check_username.trim() === "" || check_password.trim() === ""){
        alert("Please specify values")
      }else{
      axios.defaults.baseURL="http://localhost:3000"
      axios.get("/execute-spark-retrieve-job-mysql",{
        params: {
          url: formData.url,
          username: formData.username,
          password: formData.password,
        },
      })
      .then((result) => {
        console.log(result);
        setTables(result.data);
        console.log(tables);
        
      });
    }
    }; 
    
  return(
    <div style={{ display: 'block', 
                  width: 700, 
                  padding: 30 }}>
                    
      <h4>MySQL</h4>
      <Card style={{ width: '40rem' }}>
      <Card.Img variant="top" src={MySQL} alt="MySQL" style={{width:250, height:250}} />
      <Card.Body>
        <Card.Title>ABOUT</Card.Title>
        <Card.Text>
        MySQL is an open-source relational database management system (RDBMS) that uses Structured Query Language (SQL). It was created in 1995 and is now owned by Oracle Corporation. MySQL is widely used in web applications and is the most popular open-source database system in the world.
        <br />
        Some key features of MySQL include:
        <br />
        <ul>
            <li>Support for multiple platforms, including Windows, Linux, and macOS</li>
            <li>Scalability, with the ability to handle databases ranging from small to large</li>
            <li>High performance and fast data processing</li>
            <li>Data security, including encryption and access control</li>
            <li>Support for a wide range of programming languages, including PHP, Python, and Java</li>
        </ul>
        <p>MySQL is also known for its ease of use and flexibility, making it a popular choice for many different types of applications, from small websites to large enterprise systems.</p>
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item><a href="https://www.mysql.com/" >Learn More</a></ListGroup.Item>
      </ListGroup>
    </Card>
    <br />
    <Form onSubmit={handleSubmit}>
      <Form.Group>
          <Form.Label>URL:</Form.Label>
          <Form.Control type="text" name="url" value={formData.url} onChange={handleInputChange}
                        placeholder="Enter MySQL URL" required/>
                        <br />
        </Form.Group>
        <Form.Group>
          <Form.Label>Enter your username:</Form.Label>
          <Form.Control type="text" name="username" value={formData.username} onChange={handleInputChange}
                        placeholder="Enter your your username " required/>
                        <br />
        </Form.Group>
        <Form.Group>
          <Form.Label>Enter your password:</Form.Label>
          <Form.Control type="password" name="password" value={formData.password} onChange={handleInputChange}  placeholder="Enter your password" required/>
          <br />
          <Form.Check type="checkbox" label="Add Connection" checked={checked} onChange={() => setChecked(!checked)} />
        </Form.Group>
        <Button variant="primary"  type="submit" onClick={handleClick}>
           Check Connection
        </Button>
        <br />
        <br />
        <Button variant="secondary" type="submit" onClick={HandleTables}>Retrieve tables</Button>
      </Form>
      <div>
      <h1>Table List</h1>
      <ul>
        {tables.map(table => (
          <li key={table.table_name}>{table.table_name}</li>
        ))}
      </ul>

    </div>
    </div>
  );
}