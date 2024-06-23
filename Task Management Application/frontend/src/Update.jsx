import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';

function Update() {
    const {serialno} = useParams();
    const navigate = useNavigate()

    useEffect(()=>{
        axios.get('http://localhost:8081/read/'+serialno)
        .then(res => {
            console.log(res);
            setValues({...values, title: res.data[0].Title, description: res.data[0].Description, date: res.data[0].DueDate});
        })
        .catch(err => console.log(err))
    },[])

    const [values, setValues] = useState({
        title: '',
        description: '',
        date: ''
    })

    const handleUpdate = (event) => {
        event.preventDefault();
        axios.put('http://localhost:8081/update/'+serialno,values)
        .then(res => {
            console.log(res)
            navigate('/')
        })
        .catch(err => console.log(err));
    }

  return (
    <div className='home'>
        <div className='box'>
            <form onSubmit={handleUpdate}>
                <h2>Update Task</h2>
                <div className='mb-2'>
                    <label htmlFor="">Title</label>
                    <input type="text" placeholder='Enter Title' className='form-control' value={values.title}
                    onChange={e => setValues({...values, title: e.target.value})}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Description</label>
                    <input type="text" placeholder='Description' className='form-control' value={values.description}
                    onChange={e => setValues({...values, description: e.target.value})}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Due Date</label>
                    <input type="text" placeholder='Enter Due Date' className='form-control' value={values.date.substring(0, 10)}
                    onFocus={(e) => (e.target.type = "date")}
                    onBlur={(e) => (e.target.type = "text")}
                    onChange={e => setValues({...values, date: e.target.value})}/>
                </div>
                <button className='btn btn-success'>Update</button>
            </form>
        </div>
    </div>
  )
}

export default Update