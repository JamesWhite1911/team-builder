//imports
import React, { useState } from 'react'
import Form from './Form';

//data
const membersList = [
    { username: "John", email: "John@gmail.com", role: "Team Lead" },
    { username: "Bill", email: "Bill@gmail.com", role: "Designer" },
    { username: "James", email: "James@gmail.com", role: "Engineer" },
];

//form initial values
const initialFormValues = {
    username: '',
    email: '',
    role: '',
}

const prop = 'a'
const foo = { a: 1, b: 2 }
const bar = { ...foo, [prop]: 3 }

console.log(bar.a)

//export app
export default function App() {
    //state of data
    //state of form
    const [members, setMembers] = useState(membersList)
    const [formValues, setFormValues] = useState(initialFormValues)

    //update form function
    const updateForm = (inputName, inputValue) => {
        setFormValues({ ...formValues, [inputName]: inputValue })
    }

    //submit form function
    const submitForm = () => {
        const newMember = {
            username: formValues.username.trim(),
            email: formValues.email.trim(),
            role: formValues.role.trim()
        }

        setMembers([...members, newMember]);

        setFormValues(initialFormValues);
    }

    //return
    //div
    //h1 title
    //imported form component, with props
    //map through members and return imported member component with key(member.id prop) and details(member prop)
    //close div
    return (
        <div className='container'>
            <h1>Team Members</h1>

            {
                members.map((member, idx) => {
                    return (
                        <div key={idx}>
                            <p>Name: <b>{member.username}</b></p>
                            <p>Email: {member.email}</p>
                            <p>Role: {member.role}</p>
                        </div>
                    )
                })
            }
            <Form
                values={formValues}
                update={updateForm}
                submit={submitForm}
            />
        </div>
    )
}