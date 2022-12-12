
import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Card1 = (props) => {
    console.log(props);
    const {name} = props.product;
    return (
           <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Button variant="success">Success</Button>{' '}
        </Card.Footer>
      </Card>
    );
};

export default Card1;