import Card from 'react-bootstrap/Card';

export default function AdCard({imgLink,adTitle,adText}) {
  return (
      <div>
          <Card style={{ width: '25rem' }} bg = 'light' border="success">
              <Card.Img variant="top" src={imgLink} />
              <Card.Body>
                  <Card.Title>{adTitle}</Card.Title>
                  <Card.Text>{adText}</Card.Text>
              </Card.Body>
          </Card>
      </div>

  );
}