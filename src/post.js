import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import {useState} from 'react';

export default function CreatePost() {
  const [message, setMessage] = useState('');
  const Upload = () => <input type="file" class="form-control" onChange={handleChange} />

  const [file, setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  
  return (
    <Container style={{ padding: "10px 30% 10px",background:"gray"}}>

      <Card style={{ width: '25rem',background:"black",color:"red",display: "flex",position: "relative",padding: "10px"}}>
        <Upload/>
        <Card.Img variant="top" src={file} />
        
        <Card.Body>
          <Card.Title>Описание Поста :</Card.Title>
          <Card.Text>
              <textarea
                placeholder="Message"
                value={message}
                onChange={e => setMessage(e.target.value)}
                rows="10" cols="44"
              />
          </Card.Text>
          <Button  variant="primary">Опубликовать Пост</Button>
        </Card.Body>
      </Card>
    </Container>
    );
}
