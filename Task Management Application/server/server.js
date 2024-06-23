import express from 'express'
import mysql from 'mysql'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config();

const app =  express();
app.use(cors());
app.use(express.json());

//Connection to Mysql Database
//Go to https://www.phpmyadmin.co/ and login with below credentials 
//You will be connected to Database
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

// If there is any error in above connection Please follow below 
// 1. Download Xampp control Panel 
// 2. Connect to mysql and apache 
// 3. click on Admin 
// 4. Create DB with name 'crud'
// 5. Create table with name 'task'
// 6. Create columns with name 'SerialNo'(int),'Title'(varchar), 'Description'(varchar), 'DueDate'(date)
// 7. Uncomment below code and comment above code 
// const db = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: 'crud'
// })

//API for getting all the tasks from the DB
app.get('/', (req,res) => {
    const sql = "SELECT * FROM task";
    db.query(sql, (err,result)=>{
        if(err) return res.json({Message: "Error inside server"});
        return res.json(result);
    })
})

//API for Adding new task to DB
app.post('/task', (req,res)=>{
    const sql = "INSERT INTO task (`Title`,`Description`,`DueDate`) VALUES (?)";
    console.log(req.body);
    const values = [
        req.body.title,
        req.body.description,
        req.body.date
    ]
    db.query(sql, [values], (err,result)=>{
        if(err) return res.json(err);
        return res.json(result);
    })
})

//API for reading or viewing any task details
app.get('/read/:serialno', (req,res) => {
    const sql = "SELECT * FROM task WHERE SerialNo = ?";
    const serialno = req.params.serialno;

    db.query(sql,[serialno], (err,result)=>{
        if(err) return res.json({Message: "Error inside server"});
        return res.json(result);
    })
})

//API for editing any task
app.put('/update/:serialno', (req,res) => {
    const sql = "UPDATE task SET `Title`=?, `Description`=?, `DueDate`=? WHERE SerialNo = ?";
    const serialno = req.params.serialno;

    db.query(sql,[req.body.title, req.body.description, req.body.date, serialno], (err,result)=>{
        if(err) return res.json({Message: "Error inside server"});
        return res.json(result);
    })
})

//API for deleting any task
app.delete('/delete/:serialno', (req,res) => {
    const sql = "DELETE FROM task WHERE SerialNo = ?";
    const serialno = req.params.serialno;

    db.query(sql,[serialno], (err,result)=>{
        if(err) return res.json({Message: "Error inside server"});
        return res.json(result);
    })
})

app.listen(8081, ()=>{
    console.log("Listening");
})
