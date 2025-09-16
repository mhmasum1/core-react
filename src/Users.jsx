import React, { useEffect, useState } from 'react'
import User from './User';

const Users = () => {
    const [users, setUsers] = useState([]);


    // fetch data on first render 
    useEffect(() => {
        (async () => {
            const res = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await res.json();
            setUsers(data);
        })(); // ← এখানে শেষের () ফাংশনটিকে সাথে সাথেই execute করছে

        // IIFE দিয়ে async handle করা
        // তাহলে কী করা যায়?
        // আমরা useEffect এর ভিতরে একটা নতুন async ফাংশন তৈরি করে সাথে সাথেই কল করে ফেলি।
        // এখানেই শেষের () কাজ করে।

    }, []);
    return (
        <div>
            {
                users.map(user => <User key={user.id} user={user}></User>)
            }
        </div>
    )
}

export default Users