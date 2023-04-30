var express = require("express");
var router = express.Router();
const { spawn } = require('child_process');
const child_process = require('child_process');

 // -------------------------------------------------------------- Routes for Postgres Data Retrieval ---------------------------------------------------------------------------

 router.get('/postgresData', (req, res) => {

    const {url,username,password,table,fileType} = req.query;
    // Define command and arguments
    const command = 'spark-submit';
    const args = ['--class', 'com.jdbc.postgresData', '--driver-class-path','./jars/mysql-connector-j-8.0.32.jar:./jars/postgresql-42.3.7.jar','--jars','./jars/mysql-connector-j-8.0.32.jar', '--master', 'local[*]', './jars/getall_2.12-0.1.0-SNAPSHOT.jar',url,username,password,table,fileType];
  
    // Spawn child process to execute command
    const sparkJob = spawn(command, args);
  
   // Store output from child process
   let output = '';

   // Handle stdout data from child process
   sparkJob.stdout.on('data', (data) => {
     const message = data.toString();
     if(!message.includes("loading settings")){
 
     
     console.log(`stdout: ${data}`);
     output += message;
   }
   });
  
   sparkJob.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
  });
    // Handle child process exit
    sparkJob.on('exit', (code) => {
        if (code !== 0) {
          res.status(500).json({
            message: `Spark job failed with exit code ${code}`,
            output: output
          });
        } else {
          res.json({
            message: 'Spark job completed successfully',
            output: output
          });
        }
      });
  });
module.exports = router;