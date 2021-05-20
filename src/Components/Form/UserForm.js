import React, { useState } from 'react';
import useForm from './useForm';
import validateForm from './validateForm';
import './style.css';
const UserForm = ({ allContacts, setContacts, id }) => {
    const { handleSubmit,
        handleInput,
        userRegistration,
        isValid
    } = useForm(validateForm,
        allContacts,
        setContacts,
        id
    );
    // const [error, setError]=useState()  
    return (
        <div className="userForm">
            <form onSubmit={handleSubmit} >
                <h1>Add New Contact Here !!!</h1>
                <div>
                    <label htmlFor="">Phone Number</label>
                    <br />
                    <input type="number"
                        name="phone"
                        value={userRegistration.phone}
                        onChange={handleInput}
                        className={isValid.phone ? "formInput invalid" : "formInput"}
                    />
                </div>
                <br />
                <div>
                    <label htmlFor="">First Name</label>
                    <br />
                    <input type="text"
                        name="fname"
                        value={userRegistration.fname}
                        onChange={handleInput}
                        className={isValid.fname ? "formInput invalid" : "formInput"}
                    />
                </div>
                <br />                <div>
                    <label htmlFor="">Last Name</label>
                    <br />
                    <input type="text"
                        name="lname"
                        value={userRegistration.lname}
                        onChange={handleInput}
                        className={isValid.lname ? "formInput invalid" : "formInput"}
                    />
                </div>
                <br />                <div>
                    <label htmlFor="">Date of Birth</label>
                    <br />
                    <input type="date"
                        name="dob"
                        value={userRegistration.dob}
                        onChange={handleInput}
                        className={isValid.dob ? "formInput invalid" : "formInput"}
                    />
                </div>
                <br />                <div>
                    <label htmlFor="">Occupation</label>
                    <br />
                    <input type="text"
                        name="occupation"
                        value={userRegistration.occupation}
                        onChange={handleInput}
                        className={isValid.occupation ? "formInput invalid" : "formInput"}
                    />
                </div>
                <br />                <div>
                    <label htmlFor="">Email</label>
                    <br />
                    <input type="email"
                        name="email"
                        value={userRegistration.email}
                        onChange={handleInput}
                        className={isValid.email ? "formInput invalid" : "formInput"}
                    />
                </div>
                <br />                <div>
                    <label htmlFor="">Designation</label>
                    <br />
                    <input type="text"
                        name="designation"
                        value={userRegistration.designation}
                        onChange={handleInput}
                        className={isValid.designation ? "formInput invalid" : "formInput"}
                    />
                </div>
                <br />
                <button className="submitContact">Add to Phonebook</button>
            </form>
        </div>
    );
};

export default UserForm;