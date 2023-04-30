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
  });
