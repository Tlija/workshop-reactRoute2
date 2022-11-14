import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export default function User({user}) {
    
  return (
    <div>
         <Card style={{ width: '18rem' }}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Text>
          {user.email}
        </Card.Text>
       <Link to={`/profile/${user.id}`} >
       <Button variant="primary">see profile</Button>
       </Link>
      </Card.Body>
    </Card>
    </div>
  )
}
