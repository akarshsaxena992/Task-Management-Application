import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`https://task-management-application-lzr9.onrender.com/`)
            .then(res => {
                setData(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setError('Failed to fetch data');
                setLoading(false);
            });
    }, []);

    const handleDelete = (serialno) => {
        axios.delete(`https://task-management-application-lzr9.onrender.com/delete/${serialno}`)
            .then(res => {
                window.location.reload();
            })
            .catch(err => console.error(err));
    }

    const handleDeleteWithWarning = (serialno) => {
        const userConfirmed = window.confirm("Are you sure you want to delete this task? This action cannot be undone.");
        if (userConfirmed) {
            handleDelete(serialno);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

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
                        {Array.isArray(data) && data.map((task, index) => (
                            <tr key={index}>
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
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Home;
