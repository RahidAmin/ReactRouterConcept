import React from 'react';
import { Link } from 'react-router-dom';

const User = ({ user }) => {
    const { id, name, phone, email } = user;
    const userStyle = {
        padding: '10px',
        border: '2px solid blue',
        borderRadius: '20px',
    }
    return (
        <div style={userStyle}>
            <h3>{name}</h3>
            <p>Email:{email}</p>
            <p>Phone:{phone}</p>

            <Link to={`/user/${id}`}>Show Details
                <button>Click Me</button>
            </Link>

        </div>
    );
};

export default User;