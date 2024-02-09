import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Dialog, DialogActions,  DialogContent,
  DialogContentText, DialogTitle, TextField} from '@mui/material';
import "./regform.css"

export default function AdCard({imgLink,adTitle,adText,post_id}) {
  const [open, setOpen] = React.useState(false);
const [showCom,setShowCom] = React.useState([]);

  const handleClickOpen = () => () => {
    setOpen(true);
    let url = new URL("post/comments", "http://192.168.90.205");  // конструктор URL адресов
    console.log(`Request! PostId ${post_id}`)
    url.searchParams.set('post_id', post_id);
    let xhrFirstReq = new XMLHttpRequest();
    xhrFirstReq.open('GET', url);
    xhrFirstReq.setRequestHeader("Content-Type", "application/json")
    xhrFirstReq.responseType = 'json';
    xhrFirstReq.send();
    xhrFirstReq.onreadystatechange = function () {     // если не пашет выводить в консоль console.log
      if (xhrFirstReq.readyState != 4) return;
      let responseFirst = xhrFirstReq.response;
      setShowCom(responseFirst);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);

  const comms = showCom.map((comms) => <p>{comms.id}. {comms.text}</p>)

  return (
    
    <Card sx={{ maxWidth: 500, minWidth: 500, minHeight:300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300rem"
          image= {imgLink}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {adTitle}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {adText}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={handleClickOpen()}>Посмотреть комментарии</Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Комментарии:</DialogTitle>
        <DialogContent dividers >
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
           {comms}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
            <TextField
                fullWidth={true}
                margin='normal'
                label="Комментарий"
                variant="outlined"
                placeholder="Напишите комментарий"
            />
          <Button onClick={handleClose} variant="contained" color="primary">
            Отправить
          </Button>
        </DialogActions>
      </Dialog>
      </CardActions>
    </Card>
    
  );
}