import React from 'react';
import UserCard from "./UserCard";
import {Spinner} from "react-bootstrap"

const UsersList = ({users, load}) => {
    return (
        <div className="list">
            {load ? <Spinner animation="border" />:
            (users.map((el, key) => <UserCard key={el.id} user={el}/>))}
        </div>
    )
}

export default UsersList