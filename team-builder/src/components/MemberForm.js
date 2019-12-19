import React, { useState } from 'react';

const MemberForm = props => {
    const [newMember, setNewMember] = useState({
        name: "",
        email: "", 
        role: ""
    });

    const handleChanges = e => {
        setNewMember({
            ...newMember, [e.target.name] : e.target.value
        })
        console.log(e.target.value)
    }

    const submitForm = e => {
        e.preventDefault();
        props.addNewMember(newMember)
        setNewMember({name: "", email: "", role: ""})
    }

    return(
        <form onSubmit = {submitForm}>
            <label htmlFor = "name">Name</label>
            <input 
            type = "text"
            name = "name"
            id = "name"
            placeholder = "Your Name"
            onChange = {handleChanges}
            value = {newMember.name}
            />

            <label htmlFor = "email">Email</label>
                <input 
                type = "text"
                name = "email"
                id = "email"
                placeholder = "Your Email"
                onChange = {handleChanges}
                value = {newMember.email}
                />

            <label>Role</label>
                <textarea
                name = "role"
                id = "role"
                placeholder = "Tell us a bit about what you do"
                onChange = {handleChanges}
                value = {newMember.role}
                />
            
            <button>Add Member</button>
        </form>
)}

export default MemberForm;