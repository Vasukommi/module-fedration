import { useState } from 'react';
import React from "react";
import "./user.css"

const UserList = () => {
    const [users, setUsers] = useState([]);

    const addUser = (event) => {
        event.preventDefault();
        const { name, email } = event.target.elements;
        setUsers([...users, { name: name.value, email: email.value }]);
        event.target.reset();
    };

    return (
        <div className="users-container">
            <h2>Users</h2>
            <form onSubmit={addUser} className="user-form">
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" required />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" required />
                </div>
                <button type="submit">Add User</button>
            </form>
            <table className="user-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserList;
