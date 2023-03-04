import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const MyCard = ({ src, title, description, border, color }) => {
  return (
    <>
      <Card
        className="text-center"
        border={border}
        style={{ width: '18rem' }}
      >
        <Card.Img variant="top" src={src} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button variant={color}>Ver más</Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default MyCard;
