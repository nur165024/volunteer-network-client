import React from 'react';
import AdminNav from '../AdminNav/AdminNav';
import { useForm } from 'react-hook-form';
import './AddEvent.css';

const AddEvent = () => {

    const {register, handleSubmit, formState: {errors} } = useForm();

    const addEventSubmit = (data) => {
        console.log(data);
    }

    return (
        <section>
            <div className="container">
                <div className="row">
                    <AdminNav />
                    <div className="col-md-9">
                        <h3>Add event</h3>
                        <form onSubmit={handleSubmit(addEventSubmit)}>
                            <div className="row">
                                <div className="form-group col">
                                    <label htmlFor="fullName">Full name</label>
                                    <input type="text" id="fullName" className={ errors.fullName ? 'form-control is-invalid' : 'form-control' } 
                                    {...register('fullName',{required:true})}
                                    placeholder="Full name" />
                                    {errors.fullName && <p className="errorClass">FullName is required</p>}
                                </div>
                                <div className="form-group col">
                                    <label htmlFor="date">Date</label>
                                    <input type="date" id="date" className={ errors.date ? 'form-control is-invalid' : 'form-control' }
                                    {...register('date',{required:true})} />
                                    {errors.date && <p className="errorClass">Date is required</p>}
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col">
                                    <label htmlFor="description">Description</label>
                                    <textarea id="description" className={ errors.description ? 'form-control is-invalid' : 'form-control' } placeholder="Description" 
                                    {...register('description',{required:true})}
                                    rows="5"></textarea>
                                    {errors.description && <p className="errorClass">Desicription is required</p>}
                                </div>
                                <div className="form-group col">
                                    <label htmlFor="banner">Banner</label>
                                    <input type="file" id="banner" className={ errors.banner ? 'form-control is-invalid' : 'form-control' } placeholder="Description" 
                                    {...register('banner',{required:true})}
                                     />
                                     {errors.banner && <p className="errorClass">Banner is required</p>}
                                </div>
                            </div>

                            <div className="text-right">
                                <button className="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddEvent;