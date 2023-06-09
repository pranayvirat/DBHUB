# DBHUB

Project Description:

DBHUB application makes it easy for users to access and retrieve data from various database systems like PostgreSQL, MongoDB, AWS and MySQL. It handles both SQL based and No-SQL based databases.
Features that are provided in DBHUB are:
1. You can connect to all the four databases.
2. Retrieve list of tables and collections in PostgreSQL, MySQL and MongoDB.
3. Retrieve data from specific tables, collections and buckets
4. To export data into the following file formats: JSON, Parquet, and CSV.
5. To retrieve data from both PostgreSQL and MySQL and join them together and display it.


These are the important features that are implemented in this Project.


EC2 instance:


Test credentials:
Login: pranayvirat08@gmail.com
Password: Virat@123

To access AWS use the following credentials:





Guide to use the application:

1. User needs to create an account initially to access the application.
2. Once user creates an account, user needs to login into the application with the registered credentials.
3. Once user logs in, the page will be redirected to homepage.
4. Brief description about the project is mentioned in the homepage and a carousel is provided to redirect to specific database pages.
5. Once any of the database page is selected, user needs to input the database credentials to connect to database.
6. Parameters for PostgreSQL:
    <br>1. URL: The JDBC URL for PostgreSQL is a string that specifies the address of the database server, along with any necessary parameters for connecting to the database. Here is an example JDBC URL for connecting to a PostgreSQL database:<b>jdbc:postgresql://localhost:5432/mydatabase</b></p><p>In this example, localhost is the hostname or IP address of the server where the PostgreSQL database is running, 5432 is the port number on which the database is listening for connections, and mydatabase is the name of the database you want to connect to. You may need to replace localhost with the actual hostname or IP address of your server, and mydatabase with the name of your own database. 
    <br>2. Username: When connecting to a PostgreSQL database, you need to provide a valid username.
    <br>3. Password:  When connecting to a PostgreSQL database, you need to provide a valid password
    <br>4. tablename: To retrieve data from any specific data, user needs to input the table name.
    <br>5. Check Connection: If user wants that connection to be saved needs to select this check box.
    <br>6. File Types: If user want to export the tabular data to any file format needs to select the type and then retrieve data and then download the data.
    
7. Paramaters for MySQL:
    <br>a. URL: The JDBC URL for MySQL usually looks like this: jdbc:mysql://localhost:3306/dbname , where localhost is the name of the server where MySQL is running, 3306 is the port number, and dbname is the name of the database you want to connect to. You will need to replace localhost and dbname with the appropriate values for your MySQL setup.
    <br>b. Username: When connecting to a MySQL database, you need to provide a valid username.
    <br>c. Password:  When connecting to a MySQL database, you need to provide a valid password
    <br>d. tablename: To retrieve data from any specific data, user needs to input the table name.
    <br>e. Check Connection: If user wants that connection to be saved needs to select this check box.
    <br>f. File Types: If user want to export the tabular data to any file format needs to select the type and then retrieve data and then download the data.

8. Parameters for AWS:
    <br>a. Access Key: Access key is a unique identifier for your AWS account. It is used to authenticate your requests to AWS services.
    <br>b. Secret Key: Secret key is a password that is used to authenticate your access key. It is used to sign your requests to AWS services.
    <br>c. Bucket Name: A bucket is a container for objects stored in Amazon S3. Each object is uniquely identified within a bucket by a key (i.e., name). Objects consist of data and metadata that describes the data. The maximum allowed size of an object is 5 TB.
    <br>d. File Path: The path of the file in the bucket.
    <br>f. File Types: If user want to export the tabular data to any file format needs to select the type and then retrieve data and then download the data.

9. Parameters for MongoDB:
    <br>a. URI: MongoDB connection URI needs to be mentione which is of the form mongodb://localhost:27017/
    <br>b. Database: Database name needs to be given as input.
    <br>c. Collection: Collection name should be given as input to get data from that specific collection.
    <br>d.  File Types: If user want to export the tabular data to any file format needs to select the type and then retrieve data and then download the data.
    
10. Parameters for Centralized Data:
    <br>a. Table name: table name needs to be mentioned that is present in both the PostgreSQL and MySQL.
    <br>b. File Types: If user want to export the tabular data to any file format needs to select the type and then retrieve data and then download the data.
    
11. ManageConnections: User can updated and delete connections based upon the necessity.





Guide to install application:

Note: The following commands work perfectly on Ubuntu need to map the dependencies for other operating systems.
1. Dependencies: 

    <br>a. System that supports the latest versions of MongoDB, React JS, Express, Node, Spark
    <br>b. Steps to install Spark: 
        <br>i.  sudo apt-get update
        <br>ii. sudo apt-get install default-jre
        <br>iii.wget https://downloads.apache.org/spark/spark-{version}/spark-{version}-bin-hadoop{hadoop_version}.tgz
        <br>iv. tar -xvzf spark-{version}-bin-hadoop{hadoop_version}.tgz
        <br>v.  sudo mv spark-{version}-bin-hadoop{hadoop_version} /usr/local/spark
        <br>vi. sudo nano ~/.bashrc
        <br>vii. export SPARK_HOME=/usr/local/spark
        <br>viii. export PATH=$PATH:$SPARK_HOME/bin
        <br>ix. source ~/.bashrc
    <br>c. Once spark works fine then clone the project.
   <br> d. cd into the project and install the dependencies using npm.
   <br> e. cd into Server folder and do npm start
   <br> f. The application can be accessed on http://localhost:3000
   <br> g. If you want to test the PostgreSQL, MySQL, and MongoDB user can pull specific images and input some data into the dockers and test those.
    
    





    
