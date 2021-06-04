import React from 'react';
import {Card, Button} from "react-bootstrap"
import { Link } from 'react-router-dom';

const UserCard = ({user}) => {
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://cdn1.iconfinder.com/data/icons/avatar-97/32/avatar-02-512.png" />
        <Card.Body>
            <Card.Title>{user.name}</Card.Title>
            <Card.Text>
            {user.email}
            </Card.Text>
            <Button variant="light" style={{color:"white"}}><Link to={`/users/${user.id}`}>details</Link></Button>
        </Card.Body>
</Card>
    )
}

export default UserCard
