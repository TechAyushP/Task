import React, { useState } from 'react';

const Crud = () => {
    let [FormData, setFormData] = useState({ name: '', email: '', list: [] });
    let { name, email, list } = FormData;

    let handlesubmit = (e) => {
        e.preventDefault();
        
        // Validation: check if name or email is empty
        if (!name || !email) {
            alert('Please fill the form');
            return;
        }

        let obj = {
            name: FormData.name,
            email: FormData.email
        };
        setFormData({ name: '', email: '', list: [...FormData.list, obj] });
    };

    let handlechange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...FormData, [name]: value });
    };

    return (
        <div>
            <form action="" onSubmit={handlesubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id='name' name='name' value={name} onChange={handlechange} />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id='email' name='email' value={email} onChange={handlechange} />
                </div>
                <button type="submit">Submit</button>
                <div>Form Details:</div>

            </form>
            <div>
                {
                    list.map((val, i) => {
                        return (
                            <div style={{}} >
                                <div key={i} >
                                <p>Name: {val.name}</p>
                                <p>Email: {val.email}</p>
                            </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default Crud;
