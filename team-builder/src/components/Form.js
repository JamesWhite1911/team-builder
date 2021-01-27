import React from 'react'

export default function Form(props) {
    const { values, update, submit } = props

    const onChange = event => {
        const { name, value } = event.target;

        update(name, value);
    }

    const onSubmit = event => {
        event.preventDefault();
        submit();
    }

    return (
        <form onSubmit={onSubmit}>
            <div>
                <label>Name
                    <input
                        type="text"
                        name="username"
                        value={values.username}
                        onChange={onChange}
                    />
                </label>
                <br />
                <label>Email
                    <input
                        type="email"
                        name="email"
                        value={values.email}
                        onChange={onChange}
                    />
                </label>
                <br />
                <label>Role
                    <input
                        type="text"
                        name="role"
                        value={values.role}
                        onChange={onChange}
                    />
                    <br />
                    <div className='submit'>
                        <button>submit</button>
                    </div>
                </label>
            </div>
        </form>
    )
}
