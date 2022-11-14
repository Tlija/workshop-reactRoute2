import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Todos({todo}) {
  return (
    <div>
          <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{todo.title}</Card.Title>
        <Card.Text>
          {todo.completed?'Done':'NotDone'}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  )
}
