import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Create() {
    const [values, setValues] = useState({
        title: '',
        description: '',
        date: ''
    })
    const navigate = useNavigate();
    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:8081/task', values)
        .then(res => {
            console.log(res);
            navigate('/')
        })
        .catch(err => console.log(err))
    }
  return (
    <div className='home'>
        <div className='box'>
            <form onSubmit={handleSubmit}>
                <h2>Add Task</h2>
                <div className='mb-2'>
                    <label htmlFor="">Title</label>
                    <input type="text" placeholder='Enter Title' className='form-control'
                    onChange={e => setValues({...values, title: e.target.value})}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Description</label>
                    <input type="text" placeholder='Description' className='form-control'
                    onChange={e => setValues({...values, description: e.target.value})}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Due Date</label>
                    <input type="date" placeholder='Due Date' name="date" id="date" className='form-control'
                    onChange={e => setValues({...values, date: e.target.value})}/>
                </div>
                <button className='btn btn-success'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Create