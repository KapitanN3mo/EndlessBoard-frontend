import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import {useRef, useState} from 'react';

export default function CreatePost() {
  const [message, setMessage] = useState('');
  const comments = message;
  const Upload = () => <input type="file" />
  const [url, setUrl] = useState();
  const uploadRef = useRef();
 
  
  
  
  return (
    <Container>
      <Upload ref={uploadRef} onUpload={setUrl}>
      </Upload>
      <Card style={{ width: '18rem' }}>
        
        <Card.Img variant="top" src={url} />
        
        <Card.Body>
          <Card.Title>Описание Поста :</Card.Title>
          <Card.Text>
              <textarea
                placeholder="Message"
                value={message}
                onChange={e => setMessage(e.target.value)}
              />
          </Card.Text>
            <Button variant="primary">Опубликовать Пост</Button>
        </Card.Body>
      </Card>
    </Container>
    );
}
