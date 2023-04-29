import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';
import Navbar from '../components/Navbar'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



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

const GetData = () => {
  const [tableData, setTableData] = useState([]);
  const [formData, setFormData] = useState("");
  const [checkedJSON, setCheckedJSON] = useState(false);
  const [checkedParquet, setCheckedParquet] = useState(false);
  const [checkedCSV, setCheckedCSV] = useState(false);
  const [type, setType] = useState("");
  const [showTable, setShowTable] = useState(false);
  
   

  const handleChange = (event) => {
    const { name, value } = event.target; 
    setFormData(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
;
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
    //console.log('Table name:', formData);
    axios.defaults.baseURL = "http://localhost:3000"
    axios.get('/execute-spark-job-all',{
      params: {
        table: formData,
        file: type,
      },} ).then(response => {
      
      const parsedData = JSON.parse(response.data.output);
      console.log(parsedData);
      if(parsedData.length === 0){
        alert("No such table exists");
      }
      else{
      setTableData(parsedData);
      setShowTable(true);
     
      }
      
    })
    .catch(error => {
      console.log(error);
    } );
      //Reload the page
      
  }


 const handleClick = async (event) => {
   try {
     event.preventDefault();
     const response = await axios.get('http://localhost:3000/api/db/download',{
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
 
  return (
    <div>

      
    </div>
  );
};



export default GetData;