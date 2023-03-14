import React from "react"
import Navbar from "./Navbar"
import 'bootstrap/dist/css/bootstrap.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import mongo from '.././logos/mongodb.png'


const MongoDB = () => {
    return(
        <>
        <Navbar />
        <div style={{ display: 'block', 
                  width: 700, 
                  padding: 30 }}>
                    
      <h4>MongoDB</h4>
      <Card style={{ width: '40rem' }}>
      <Card.Img variant="top" src={mongo} alt="mongo" style={{width:250, height:250}} />
      <Card.Body>
        <Card.Title>ABOUT</Card.Title>
        <Card.Text>
        MongoDB is a document-oriented NoSQL database system that is designed to be scalable and flexible. MongoDB uses a flexible document data model that can accommodate a wide variety of data types and structures.   
        <br />
        Some key features of AWS include:
        <br />
        <ul>
            <li>Scalability: MongoDB is designed to be highly scalable, allowing businesses to easily scale out their database clusters as needed. This makes it a good choice for applications that need to handle high volumes of data and traffic. </li>
            <li>Performance: MongoDB is designed for high performance, with features such as automatic sharding, in-memory storage engine, and indexing. These features allow businesses to run their applications faster and more efficiently.</li>
            <li>Security: MongoDB offers a range of security features, including encryption, access controls, and auditing. These features can help businesses protect their data from unauthorized access and attacks.</li>
        </ul>
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item><a href="https://www.mysql.com/" >Learn More</a></ListGroup.Item>
      </ListGroup>
    </Card>
    </div>
        </>
      
    )
}

export default MongoDB;