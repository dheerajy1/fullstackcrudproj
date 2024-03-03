# In this article, I am going to explain step-by-step How to connect to SQL Server

<mark>Try to add in Sql Server a table with the api name and the user and the time stamp and the number of calls api calls made,</mark>

Postman for testing of API.

# Architecture Diagram

![image.png](align="center")

# Pre-requisites of this Project

1. Node.js

2. Postman

3. VS Code

4. Rest Client VS Code Extension

5. MS SQL Server

6. Github account

# I. MS SQL Server

## Pre-requisites

1. TCP/IP SQL Server Network Interface Protocol Layer Enabled.

Install MS SQL Server\[[Link](https://www.microsoft.com/en-US/download/details.aspx?id=104781)\]

## i. Create a Database

Using DDL command `create`,

 ```
create database ITdepartment
on primary
    (
        name = N 'employee_data',
        filename = N 'E:\employee.mdf',
        size = 8192 kb,
        filegrowth = 65536 kb
    )
Log on
    (
        name = N 'employee_log',
        filename = N 'E:\employee_log.mdf',
        size = 8192 kb,
        filegrowth = 65536 kb
    )
```

## ii. Create a Login

Using DDL command `create`,

```
create login frontendemplogi
with password ''
```

server role

```
USE ITdepartment;
alter server role db_owner
add member loginname
```

## iii. Create a Table

Using DDL command `create`,

```
CREATE TABLE employeeDetails (
    Id INT PRIMARY KEY,
    firstname VARCHAR(255),
    lastname VARCHAR(255),
    gender CHAR(1),
    email VARCHAR(255),
    password VARCHAR(255),
    phonenumber VARCHAR(20)
);
```

## iv. Insert Data

Using DML command `insert`,

```
INSERT INTO employeeDetails (Id, firstname, lastname, gender, email, password, phonenumber)
VALUES 
    (1, 'John', 'Doe', 'M', 'john.doe@example.com', 'password123', '1234567890'),
    (2, 'Jane', 'Doe', 'F', 'jane.doe@example.com', 'password456', '0987654321'),
    (3, 'Bob', 'Smith', 'M', 'bob.smith@example.com', 'password789', '2345678901'),
    (4, 'Alice', 'Johnson', 'F', 'alice.johnson@example.com', 'password012', '3456789012'),
    (5, 'Charlie', 'Brown', 'M', 'charlie.brown@example.com', 'password345', '4567890123'),
    (6, 'Lucy', 'Van Pelt', 'F', 'lucy.vanpelt@example.com', 'password678', '5678901234'),
    (7, 'Linus', 'Van Pelt', 'M', 'linus.vanpelt@example.com', 'password901', '6789012345'),
    (8, 'Michael', 'Smith', 'M', 'michael.smith@example.com', 'password234', '7890123456'),
    (9, 'Sarah', 'Johnson', 'F', 'sarah.johnson@example.com', 'password567', '8901234567'),
    (10, 'David', 'Lee', 'M', 'david.lee@example.com', 'password890', '9012345678'),
    (11, 'Emily', 'Wang', 'F', 'emily.wang@example.com', 'password123', '0123456789'),
    (12, 'Daniel', 'Miller', 'M', 'daniel.miller@example.com', 'password456', '1234567890'),
    (13, 'Olivia', 'Davis', 'F', 'olivia.davis@example.com', 'password789', '2345678901'),
    (14, 'Ethan', 'Garcia', 'M', 'ethan.garcia@example.com', 'password012', '3456789012'),
    (15, 'Sophia', 'Martinez', 'F', 'sophia.martinez@example.com', 'password345', '4567890123'),
    (16, 'Mason', 'Lopez', 'M', 'mason.lopez@example.com', 'password678', '5678901234'),
    (17, 'Ava', 'Gonzalez', 'F', 'ava.gonzalez@example.com', 'password901', '6789012345'),
    (18, 'Liam', 'Hernandez', 'M', 'liam.hernandez@example.com', 'password234', '7890123456'),
    (19, 'Isabella', 'Wilson', 'F', 'isabella.wilson@example.com', 'password567', '8901234567'),
    (20, 'James', 'Taylor', 'M', 'james.taylor@example.com', 'password890', '9012345678');
```

## v. Enabling TCP/IP SNI

SNI - SQL Server Network Interface Protocol Layer

1. Win+R \\ compmgmt.msc

2. Navigate to Services and applications \\ SQL server configuration manager \\

3. Or directly search for SQL Server Configuration Manager.

4. Navigate to SQL Server Network configuration\\

5. Protocols for \[yourinstancename\] \\ TCP/IP \\properties \\ protocol tab\\ select yes

6. IP Addresses tab \\ scroll all the way down \\note down port number.

We need the port number for configuration and the connection string in the code to connect the node.js to the MS SQL Server.

# II. Terminal

To list all logicaldisks,

```
wmic logicaldisk get name
```

Change directory

```
cd folder_name
```

To rename folders,

```
ren oldfoldername newfoldername
```

List folders in the current directory

```
ls
```

To delete folders in the Windows terminal,

```
rd /s /q input_path
```

make a folder

```
mkdir input_Project_name
```

To move files to a folder, you can use the `mv` command in the terminal,

```
mv /path/to/source/file /path/to/destination/folder
```

Now, use cd to navigate to this folder created.

```
cd Project_name
```

Github,

I am creating a repository and cloning it to my local machine,

To connect to your GitHub repository in the terminal and clone it to a specific path,

```
cd Projects
```

Once you are in the desired directory, use the `git clone` command followed by your repository URL. Replace `<repository-url>` with the actual URL of your GitHub repository, For example:`git clone <repository-url>`

```
git clone https://github.com/your-username/your-repository.git
```

To commit the changes you made in Git,  follow these steps:

Check the status of your changes, This will show you which files have been modified or added,

```
git status
```

Stage your changes,

stage all changes in the current directory,

```
git add .
```

stage-specific files, you can list their names after,

```
git add
```

After staging your changes, you can create a commit, include a commit message to describe the changes made,

```
git commit -m "Updated homepage"
```

These steps will commit the changes you made to your local repository. Remember that the changes are only saved locally, and if you want to push them to a remote repository, you'll need to use the,

```
git push
```

Finally,

Open VS Code

```
code .
```

To open a folder in the same Visual Studio Code window from the terminal,

```
code -r .
```

You can also perform the above commands inside VS Code terminal too.

# III. VS Code

Navigate to Terminal,

Make sure you are in the project directory,

## i. Dependencies

### a. package.json

```
npm init -y
```

<mark>Change the main page name,</mark> (if uploading to GitHub then don't change)

```n
"main": "index.js",
```

### b. express.js package

Exps.js is a web application framework used for building server-side applications in JavaScript.

It plifies tasks such as routing, middleware handling, server-side rendering, API development, and static file serving.

It widely used in the Node.js ecosystem and has a large community of developers.

install express.js,

```
npm install express
```

You will see the node\_modules folder 📂 in your project directory.

### c. mssql package

A package that provides an interface for communicating with Microsoft SQL Server databases from Node.js applications.

install mssql,

```
npm install mssql
```

### d. dotenv package

Theotenv" package is a popular npm package that allows you to load environment variables from a ".env" file into your Node.js application.

By ng the "dotenv" package, you can securely store sensitive information like API keys, database credentials, and other configuration variables in a separate file instead of hardcoding them in your codebase.

Theckage provides methods like `config()` or `load()` to load the variables from the ".env" file into the `process.env` object, making them accessible throughout your application.

install dotenv,

```
npm install dotenv
```

### e. nodemon package

nodemon auto-runs your express server whenever you make a change to the server.js file

install nodemon,

```
npm install --save dev nodemon
```

Modify the scripts key value,

```
"start": "nodemon app.js"
```

The entry point is <mark>app.js</mark> file in your project directory.

### f. bcrypt package

The "bcrypt" package provides functionality for hashing passwords and is commonly used for securing sensitive data

The command `npm install bcrypt` is used to install the "bcrypt" package in a Node.js project

install bcrypt

```
npm install bcrypt
```

### g. jsonwebtoken package

The `jsonwebtoken` package is used for working with JSON Web Tokens (JWTs) in Node.js. It provides functions for generating, signing, and verifying JWTs.

The `jsonwebtoken` package allows you to generate and sign JWTs using the `sign` function.

Theign` function takes a payload (data to be included in the token), a secret or private key, and optional configuration options.

Aftinstalling the `jsonwebtoken` package using the `npm install jsonwebtoken` command, you can start using it in your Node.js project.

install jsonwebtoken,

```
npm install jsonwebtoken
```

Summary:

Thesonwebtoken` package in Node.js provides functionality for generating and signing JSON Web Tokens (JWTs) and is commonly used for authentication and authorization purposes.

Finally,

Run the following to install all the dependencies in one go,

First, install npm package,

```
npm init -y
```

then install dependencies,

```
npm install express mssql dotenv
```

```
npm install --save-dev dotenv nodemon
```

```
"start": "nodemon app.js"
```

```Powershell
npm install bcrypt jsonwebtoken
```

Starting the server run the following command,

```
npm start
```

## Creating folders 📂 and files 📄

1. Create <mark>app.js file</mark> 📄

2. Create .env file 📄

3. Create .gitignore file 📄

4. Create route.rest file 📄

5. Create a config folder 📂
    - create a database.js file 📄 in the config folder.

6. Create API folder 📂

7. Create a users folder 📂

    - create user.router.js file 📄

    - create user.controller.js file 📄

    - create user.service.js file 📄

8. Create auth 📂

    - create token\_validation.js file 📄

## ii. .env file 📄

define the following variables which will be used in the subsequent files,

```
APP_PORT = 0000

MSSQL_HOST = localhost
MSSQL_PORT = find
MSSQL_USER = root
MSSQL_PASSWORD = 
MSSQL_DATABASE =
JWT_KEY =
```

## iii. .gitignore file 📄

The ".gitignore" file is used to specify files and directories that should be ignored by Git, meaning they will not be tracked or staged for commits.

It is a text file that contains patterns for matching files and directory names, allowing you to exclude specific files or types of files from being included in the version control system.

Summary:

Thegitignore" file allows you to define patterns to exclude files and directories from being tracked by Git.

By cifying files or patterns in the ".gitignore" file, you can prevent them from being included in commits, making it useful for ignoring generated files, build artifacts, or sensitive information.

inside the .gitignore file,

The following specified files and directories should be ignored by Git, meaning they will not be tracked or staged for commits.

```
.env
node_modules
route.rest
```

## iv. database.js file 📄

Import mssql module,

### a. "mssql" Package and the "createPool" Function

```javascript
const { ConnectionPool } = require("mssql");
```

The code `const { ConnectionPool } = require("mssql");` imports the `connectionPool` function from the "mssql" package in Node.js.

* This package provides an interface for interacting with Microsoft SQL Server databases.
    
* The `connectionPool` function allows you to create a connection pool for efficiently managing multiple connections to a SQL Server database.
    
* It takes an object as an argument, which contains the necessary configuration details. The function simplifies executing queries and transactions on the database.
    

Summary,

* The "mssql" package in Node.js offers functionality for working with Microsoft SQL Server databases.
    
* The `connectionPool` function allows the creation of a connection pool for efficient management of multiple connections.
    
* It simplifies database interaction by providing an interface to execute queries and transactions.
    

Navigate to this Npmjs documentation \[[Link](https://www.npmjs.com/package/mssql)\].

### b. Creating a Database Connection Pool using the "ConnectionPool" Method

```javascript
const pool = ConnectionPool({
  host: localhost,
  port: 0000,
  user: loginname,
  password: "",
  database: test,
  connectionLimit: 10,
});
```

However, we will rewrite & use environment variables for the above code snippet to mask the deetails as it is sensitive info,

```javascript
const pool = createPool({
  host: process.env.MSSQL_HOST,
  port: process.env.MSSQL_PORT,
  user: process.env.MSSQL_USER,
  password: process.env.MSSQL_PASSWORD,
  database: process.env.MSSQL_DATABASE,
  connectionLimit: 10,
});
```

The code snippet attempts to create a database connection pool using the `ConnectionPool` function.

* The provided configuration includes properties such as the host, port, user, password, database, and connection limit.
    
* The specified properties in the object include the host, port, user, password, database, and connection limit for the pool.
    

### c. Exporting the Database Connection Pool in Node.js

```javascript
module.exports = pool;
```

The code snippet `module.exports = pool;` exports the `pool` variable, which represents the database connection pool.

This allows other modules or files in the Node.js application to import and use the `pool` variable for executing database queries and managing connections. \[like in user.service.js file 📄\]

The environment variables in database.js are,

1. MSSQL\_HOST =
    
2. MSSQL\_PORT =
    
3. MSSQL\_USER =
    
4. MSSQL\_PASSWORD =
    
5. MSSQL\_DATABASE =

## v. app.js File 📄

### a. Import express module,

The `express` module is used to create a web server,

```javascript
const express = require("express");
```

An instance of the Express application,

```javascript
const app = express();
```

The line `const app = express();` is used to create an instance of the Express application.

It initializes and sets up the Express framework, allowing you to use its features and functionalities.

The `app` object represents the Express application and can be used to define routes, handle HTTP requests and responses, configure middleware, and more.

It is the central object you work with when building a web application using Express.js.

### b. import .env package,

The `dotenv` package allows developers to store sensitive configuration data, such as API keys or database credentials, in a separate .env file, keeping them separate from the codebase.

```javascript
require("dotenv").config();
```

The line `require("dotenv").config();` is used to load environment variables from a .env file into the Node.js application.

The environment variables in app.js are,

1. APP\_PORT = 0000
    

---

### Testing a GET API endpoint with Express.js,

> Skip this if you don't want to test your API.

```javascript
app.get('/api', (req, res) => {
    res.json({
        success: 1,
        message: 'This is rest API, Working'
    });
});
```

The code snippet `app.get('./api', (req, res) => { ... })` is defining a route for handling HTTP GET requests to the '/api' endpoint.

* When a GET request is made to that endpoint, the provided callback function will be executed.
    
* Inside the callback function, the response object `res` is used to send a JSON response back to the client.
    
* The JSON response includes a `success` property set to 1 and a `message` property set to 'This is rest API Working'.
    

Summary:

* The code snippet demonstrates how to define a GET API endpoint using Express.js.
    
* When a GET request is made to the '/api' endpoint, a JSON response is sent back to the client with a success status of 1 and a message indicating that the REST API is working.
    

Starting the Express Server and Listening on a Port,

```javascript
app.listen(process.env.APP_PORT, () => {
    console.log("server up and running");
});
```

The code `app.listen(0000, () => { ... })` is used to start the Express application and listen for incoming HTTP requests on a specified port.

* The APP\_PORT represents the port number on which the server will listen.
    
* When the server starts and begins accepting requests, the provided callback function is executed.
    
* In this case, the callback function logs a message to the console indicating that the server is up and running.
    

Summary:

* This code snippet demonstrates how to start an Express server and make it listen for incoming HTTP requests on a specified port.
    
* Once the server is up and running, a message is logged to the console confirming the port on which the server is listening.
    

Then, to test, go to the browser to view the JSON output,

```sql
http://localhost:0000/api
```

# Faced an issue:

Error: GET [http://localhost:0000/api](http://localhost:3000/api) 404 (Not Found)

Later found, the end point was having './api' instead of '/api'

Finally, Tested API successfully.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1709396549072/f431f1c9-b6b6-4eeb-864d-54251e897f95.png)

---


