import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function Read() {
    const {serialno} = useParams();
    const [task, setTask] = useState([])

    useEffect(()=>{
        axios.get(`https://task-management-application-lzr9.onrender.com/read/`+serialno)
        .then(res => {
            console.log(res);
            setTask(res.data[0]);
        })
        .catch(err => console.log(err))
    },[])
  return (
    <div className='home'>
        <div className='box'>
            <div className='p-2'>
            <h2>Task ID: {task.SerialNo}</h2>
            <h2>Title: {task.Title}</h2>
            <h2>Description: {task.Description}</h2>
            <h2>Due Date: {task.DueDate ? task.DueDate.substring(0, 10) : 'No Due Date'}</h2>
            </div>
            <Link to="/" className='btn btn-primary me-2'>Back</Link>
            <Link to={`/edit/${task.SerialNo}`} className='btn btn-primary'>Edit</Link>
        </div>
    </div>
  )
}

export default Read
