import React from 'react';
import logo from '../../../src/images/logo.png';
import './Register.css';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Register = () => {

    const {register, handleSubmit, formState: {errors} } = useForm();

    const submitForm = (data) => {
        console.log(data);
    }

    return (
        <section id="registerPage">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="logoimg">
                            <Link to="/">
                                <img className="logo" src={logo} alt="logo"/>
                            </Link>
                        </div>
                        <div className="registerForm">
                            <h3>Register as Volunteer</h3>
                            <form onSubmit={handleSubmit(submitForm)}>
                                <div class="form-group">
                                    <input type="text" {...register('fullName', {required:true, minLength: 6})} 
                                    className={errors.fullName ? 'form-control is-invalid' : 'form-control'} 
                                    id="fullName" placeholder="Full Name" />
                                    {errors.fullName && <p className="errorClass">FullName is required</p>}
                                </div>

                                <div class="form-group">
                                    <input type="email" 
                                    {...register('email', {required:true})} 
                                    className="form-control" id="email" placeholder="Enter Email" />
                                    {errors.email && <p className="errorClass">Email is required</p>}
                                </div>

                                <div class="form-group">
                                    <input type="date" 
                                    {...register('date', {required:true})} 
                                    className="form-control" id="date" placeholder="Date" />
                                    {errors.date && <p className="errorClass">Date is required</p>}
                                </div>

                                <div class="form-group">
                                    <input type="text" 
                                    {...register('desicription', {required:true})} 
                                    className="form-control" id="desicription" placeholder="Desicription" />
                                    {errors.desicription && <p className="errorClass">Desicription is required</p>}
                                </div>

                                <div class="form-group">
                                    <input type="text"
                                    {...register('organizeBook', {required : true})} 
                                    className="form-control" id="organizeBook" placeholder="Organize Book" />
                                    {errors.organizeBook && <p className="errorClass">Organize Book is required</p>}
                                </div>
                                
                                <div class="form-group text-center">
                                    <button type="submit" className="btn btn-block btn-primary">Submit</button>
                                    <p>Do have an account? <Link to="/login">Login</Link></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;