import React from 'react';
import { Link } from 'react-router-dom';
import './AdminDashboard.css';
import AdminNav from '../AdminNav/AdminNav';

const AdminDashboard = () => {
    return (
        <section>
            <div className="container">
                <div className="row">
                    <AdminNav />
                    <div className="col-md-9">
                        <h3>All Event List</h3>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">SL</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Registion Date</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto@gmail.com</td>
                                    <td>3-4-2321</td>
                                    <td>
                                        <button className="btn btn-sm btn-primary">Edit</button>
                                        <button className="btn btn-sm btn-danger">Delete</button>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Mark</td>
                                    <td>Otto@gmail.com</td>
                                    <td>3-4-2321</td>
                                    <td>
                                        <button className="btn btn-sm btn-primary">Edit</button>
                                        <button className="btn btn-sm btn-danger">Delete</button>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Mark</td>
                                    <td>Otto@gmail.com</td>
                                    <td>3-4-2321</td>
                                    <td>
                                        <button className="btn btn-sm btn-primary">Edit</button>
                                        <button className="btn btn-sm btn-danger">Delete</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdminDashboard;