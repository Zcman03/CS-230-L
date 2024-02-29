import React from 'react';
import { Card } from 'react-bootstrap';

const CardComponent = () => {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Card 1</Card.Title>
          <Card.Text>
            Some text for Card 1.
          </Card.Text>
        </Card.Body>
      </Card>

      {/* Repeat the above Card structure for Card 2 and Card 3 */}
    </div>
  );
}

export default CardComponent;
