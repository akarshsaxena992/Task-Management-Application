import React, { useEffect,useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Home() {
    const [data,setData] = useState([])
    useEffect(()=>{
        axios.get(`${process.env.API_BASE_ENDPOINT}/`)
        .then(res => setData(res.data))
        .catch(err => console.log(err));
    },[])

    const handleDelete = (serialno) => {
        axios.delete(`${process.env.API_BASE_ENDPOINT}/delete/`+serialno)
        .then(res => {
            window.location.reload();
        })
        .catch(err => console.log(err));
    }

    const handleDeleteWithWarning = (serialno) => {
        const userConfirmed = window.confirm("Are you sure you want to delete this task? This action cannot be undone.");
        if (userConfirmed) {
          handleDelete(serialno);
        }
      };

  return (
    <div className='home'>
        <div className='box'>
            <h2>Tasks List</h2>
            <div className='d-flex justify-content-end'>
                <Link to="/create" className='btn btn-success'>Create +</Link>
            </div>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Task ID</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Due Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((task, index)=>{
                        return <tr key={index}>
                            <td>{task.SerialNo}</td>
                            <td>{task.Title}</td>
                            <td>{task.Description}</td>
                            <td>{task.DueDate.substring(0, 10)}</td>
                            <td>
                                <Link to={`/read/${task.SerialNo}`} className='btn btn-sm btn-info'>Read</Link>
                                <Link to={`/edit/${task.SerialNo}`} className='btn btn-sm btn-primary btn_middle'>Edit</Link>
                                <button onClick={ ()=> handleDeleteWithWarning(task.SerialNo)} className='btn btn-sm btn-danger'>Delete</button>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Home
