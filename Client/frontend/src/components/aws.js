import React from "react"
import Navbar from "./Navbar"
import 'bootstrap/dist/css/bootstrap.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import AWS_log from '.././logos/AWS-logo-2.jpg'


const AWS = () => {
    return(
        <>
        <Navbar />
        <div style={{ display: 'block', 
                  width: 700, 
                  padding: 30 }}>
                    
      <h4>AWS</h4>
      <Card style={{ width: '40rem' }}>
      <Card.Img variant="top" src={AWS_log} alt="AWS_log" style={{width:250, height:250}} />
      <Card.Body>
        <Card.Title>ABOUT</Card.Title>
        <Card.Text>
        AWS: Amazon Web Services (AWS) is a cloud computing platform that provides a wide range of services to businesses and organizations. AWS offers a variety of database services, including Amazon Aurora, Amazon RDS, Amazon DynamoDB, and Amazon Redshift.
        <br />
        Some key features of AWS include:
        <br />
        <ul>
            <li>Scalability, dependability, security, and adaptability are a few of AWS's standout qualities. To address the computing and storage demands of enterprises and organizations of all sizes, Amazon provides a variety of services.  </li>
            <li>Use Cases for AWS: AWS can be used for a wide range of applications, including web hosting, data storage, application development, machine learning, and analytics. Some of the companies that use AWS include Netflix, Airbnb, and Amazon itself.    Amazon Aurora: This is a relational database engine that is compatible with MySQL and PostgreSQL. It is designed to be highly scalable, fast, and reliable. Amazon Aurora is a good choice for businesses that need a relational database engine that can handle large volumes of data and high traffic.</li>
            <li>Amazon DynamoDB: This is a NoSQL database service that is designed to be highly scalable and flexible. It can handle both document and key-value data models. Amazon DynamoDB is a good choice for businesses that need a fast and flexible database engine for their applications.</li>
            <li>Security: AWS offers a range of security features and tools, including identity and access management, encryption, and network security. Businesses can use these tools to ensure that their applications and data are secure.</li>
            <li>Pricing: AWS offers a flexible pricing model, allowing businesses to pay only for the services they use. Businesses can choose between pay-as-you-go pricing or reserved instances to save money.</li>
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

export default AWS;