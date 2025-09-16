import React from 'react';

const User = ({ user }) => {

    // With Destructuring
    const { name, email, username } = user;

    return (
        <div className="border p-2 rounded mb-2">

            {/* Without Destructuring (Directly using user.prop) */}

            {/* <h3>Name: {user.name}</h3>
            <p>Email: {user.email}</p>
            <p>UserName: {user.username}</p> */}

            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
            <p>UserName: {username}</p>
        </div>
    );
};

export default User;
