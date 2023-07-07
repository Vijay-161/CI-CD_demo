import React, { useEffect, useState } from 'react'

export default function Users({handleDelete}) {
    const [users, setUsers] = useState([])
    const [error, setError] = useState(null)
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
        .catch(err => setError('Error fetched'))
    },[])
  return (
    <div>
      <h1>List of users</h1>
      {error ? <p>{error}</p>: null}
      <ul>
        {users.map(user=>(
            <li key={user.id}>{user.name} <button onClick={()=>handleDelete(user.id)}>delete</button></li>
        ))}
      </ul>
    </div>
  )
}
