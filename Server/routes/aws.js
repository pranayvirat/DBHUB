var express = require("express");
var router = express.Router();
const { spawn } = require('child_process');
const child_process = require('child_process');




router.get('/awsRetrieval', (req, res) => {
    const {accessKey,secretKey,bucketName,filePath,fileType} = req.query;
    // Define command and arguments
    const command = 'spark-submit';
    const args = ['--class', 'com.jdbc.awsRetrieval', '--packages','org.apache.hadoop:hadoop-aws:3.3.1', '--master', 'local[*]', '/home/pranay/SE/sample_projects/jars/aws_2.12-0.1.0-SNAPSHOT.jar',accessKey,secretKey,bucketName,filePath,fileType];
  
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
   res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
   res.setHeader('Pragma', 'no-cache');
   res.setHeader('Expires', '0');
  
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
