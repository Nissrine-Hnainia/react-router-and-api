import axios from 'axios'
import React, {useEffect, useState} from 'react';
import UsersList from "../Components/UsersList"

const Home = () => {
    const [users, setUsers] = useState([])
    const [load, setLoad] = useState(true)
    const getUsers = () => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res => {setUsers(res.data)
                        setLoad(false)})
        .catch(err => console.log(err))
    }
    useEffect(() => {
        getUsers()
    }, [])
    return (
        <div className="home">
            <h1>Welcome to our Home</h1>
            <UsersList users={users} load={load}/>
        </div>
    )
}

export default Home
