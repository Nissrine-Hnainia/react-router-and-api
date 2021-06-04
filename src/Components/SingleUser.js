import React from 'react';
import {Card, ListGroup, ListGroupItem, Spinner} from "react-bootstrap"

const SingleUser = ({user, loading}) => {
    return (
            <div>
                {loading ? <Spinner animation="border" /> : (
                            <Card style={{ width: '18rem', margin:"50px auto" }}>
                            <Card.Img variant="top" src="https://cdn1.iconfinder.com/data/icons/avatar-97/32/avatar-02-512.png" />
                            <Card.Body>
                                <Card.Title>{user.name}</Card.Title>
                                <Card.Text>
                                {user.username}
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>Address: {user.address.city}, {user.address.street}, {user.address.zipcode}</ListGroupItem>
                                <ListGroupItem>Phone: {user.phone}</ListGroupItem>
                                <ListGroupItem>Company: {user.company.name}, {user.company.bs}</ListGroupItem>
                            </ListGroup>
                            <Card.Body>
                                <Card.Link href="#">{user.email}</Card.Link>
                                <Card.Link href="#">{user.website}</Card.Link>
                            </Card.Body>
                        </Card>
                )}
            </div>
    )
}

export default SingleUser
