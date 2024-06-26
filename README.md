# Task-Management-Application

## Features

- View a list of tasks with details

  ![Screenshot (7)](https://github.com/akarshsaxena992/Task-Management-Application/assets/100353101/73a3ba04-09bb-4e40-9f00-e21578fb247a)
  
- Create new tasks

  ![Screenshot (12)](https://github.com/akarshsaxena992/Task-Management-Application/assets/100353101/4b280f97-2fbb-4639-9e55-4acfe0523d4e)
  
- Edit existing tasks

  ![Screenshot (13)](https://github.com/akarshsaxena992/Task-Management-Application/assets/100353101/0773b531-62dd-4962-a39d-56aa5a7f2724)
  
- Delete tasks
- Read tasks

  ![Screenshot (17)](https://github.com/akarshsaxena992/Task-Management-Application/assets/100353101/3a374221-b4f5-4263-8c84-d1ca6f087f3e)

- Responsive design

  ![Screenshot (15)](https://github.com/akarshsaxena992/Task-Management-Application/assets/100353101/bf579e4a-3731-4805-9236-1af6f043a9c7)

  ![Screenshot (16)](https://github.com/akarshsaxena992/Task-Management-Application/assets/100353101/57f937f0-3b3f-444c-9080-1f850fdb916a)

## Technologies Used

- React
- MySql
- Express
- Bootstrap
- CSS
- React Router

##  How do we set up this project on the local system?
1. Clone GitHub repository:
   ```bash
    git clone https://github.com/akarshsaxena992/Task-Management-Application.git
    ```
2.  Navigate to the project directory.
3.  Run the following commends and start both the backend and frontend server

    For Front End,
    ```bash
    cd frontend
    npm init
    or
    npm i
    npm start
    ```
    
    For Back End,
    ```bash
    cd server
    npm init
    or
    npm i
    npm start
    ```
    
4.  Download the XAMPP control panel for Mysql.
- Create a database named 'crud' and create a table inside that database named 'task'.
- The database should contain 4 columns:
    SerialNo (Auto Increment, Int)
    Title (varchar)
    Description (varchar)
    DueDate(date)
- Change the Credentials in server.js file. 
    host: "localhost",
    user: "root",
    password: "",
    database: 'crud'

    OR
    
    Go to https://www.phpmyadmin.co/ and log in with the following credentials.
    Host: sql12.freesqldatabase.com,
    Database name: sql12715591,
    Database user: sql12715591,
    Database password: EV6Hc83RNz
    

5. Start the development server And Utilize this Task Management System.
