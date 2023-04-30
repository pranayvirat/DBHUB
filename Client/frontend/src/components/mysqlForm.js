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
        <h4 style={{
          display: 'flex',
          justifyContent: 'start',
        }}>MySQL</h4>

        <Card style={{ width: '60rem', backgroundColor: '#C3EEFA' }}>
          <Card.Img variant="top" src={MySQL} alt="MySQL" style={{ width: 250, height: 250 }} />
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

              <h4>Parameters</h4>
              <ul>
                <li><b>URL:</b><p>JDBC URL: The JDBC URL for MySQL usually looks like this: <b>jdbc:mysql://54.236.43.43:3306/dbname </b>, where 54.236.43.43 is the name of the server where MySQL is running, 3306 is the port number, and dbname is the name of the database you want to connect to. You will need to replace 54.236.43.43 and dbname with the appropriate values for your MySQL setup.</p></li>
                <li><b>Username: </b><p>The username you use to connect to MySQL will depend on your specific MySQL setup. By default, the username is root, but it may be different if you are connecting to a MySQL server that is managed by a third party (e.g., a web host).</p></li>
                <li><b>Password: </b><p>You will need to provide the password associated with the MySQL user you are connecting as.</p></li>
              </ul>
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item><a href="https://www.mysql.com/" >Learn More</a></ListGroup.Item>
          </ListGroup>
        </Card>
      </div>
    <br />
    <Form onSubmit={handleSubmit} style={{
        border: "1px solid grey",
        padding: "20px",
        borderRadius: "8px",
        width: "50rem",
      }}>
        <Form.Group>
          <Form.Label style={{
            fontWeight: "bold",
            letterSpacing: "1px",
          }}>URL:</Form.Label>
          <Form.Control type="text" name="url" value={formData.url} onChange={handleInputChange}
            placeholder="Enter MySQL URL" required />
          <br />
        </Form.Group>
        <Form.Group>
          <Form.Label style={{
            fontWeight: "bold",
            letterSpacing: "1px",
          }}>Enter your username:</Form.Label>
          <Form.Control type="text" name="username" value={formData.username} onChange={handleInputChange}
            placeholder="Enter your your username " required />
          <br />
        </Form.Group>
        <Form.Group>
          <Form.Label style={{
            fontWeight: "bold",
            letterSpacing: "1px",
          }}>Enter your password:</Form.Label>
          <Form.Control type="password" name="password" value={formData.password} onChange={handleInputChange} placeholder="Enter your password" required />
          <br />
          
        </Form.Group>
        <Form.Group>
          <Form.Label style={{
            fontWeight: "bold",
            letterSpacing: "1px",
          }}>Enter table name:</Form.Label>
          <Form.Control type="text" name="tablename" value={formData.tablename} onChange={handleInputChange} placeholder="Enter table name" required />
          <br />
          <Form.Check type="checkbox" label="Add Connection" checked={checked} onChange={() => setChecked(!checked)} />
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
        <Form.Check type="checkbox" label="JSON"  onChange={() => setType("json")} />
        </div>
        <div style={{
            display: "flex",
            padding: "10px",
            flexDirection: 'row',
      alignItems: 'left',
      justifyContent: 'left',
      
         }}>
        <Form.Check type="checkbox" label="Parquet" onChange={() => setType("parquet")} />
        </div >
        <div style={{
            display: "flex",
            padding: "10px",
            flexDirection: 'row',
      alignItems: 'left',
      justifyContent: 'left',
      
         }}>
        <Form.Check type="checkbox" label="CSV" onChange={() => setType("csv")} />
        </div>
        </div>
        <div style={{
          display: "flex",
          justifyContent: "end",
          padding: "10px"
        }}></div>
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