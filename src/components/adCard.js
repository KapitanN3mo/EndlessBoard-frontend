import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Dialog, DialogActions,  DialogContent,
  DialogContentText, DialogTitle, TextField} from '@mui/material';
import "./regform.css"

export default function AdCard({imgLink,adTitle,adText}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);

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
            <p>Автор:11111111111111111111111111111111111111111111111</p>
            <p>Автор:11111111111111111111111111111111111111111111111</p>
            <p>Автор:11111111111111111111111111111111111111111111111</p>
            <p>Автор:11111111111111111111111111111111111111111111111</p>
            <p>Автор:11111111111111111111111111111111111111111111111</p>
            <p>Автор:11111111111111111111111111111111111111111111111</p>
            <p>Автор:11111111111111111111111111111111111111111111111</p>
            <p>Автор:11111111111111111111111111111111111111111111111</p>
            <p>Автор:11111111111111111111111111111111111111111111111</p>
            <p>Автор:11111111111111111111111111111111111111111111111</p>
            <p>Автор:11111111111111111111111111111111111111111111111</p>
            <p>Автор:11111111111111111111111111111111111111111111111</p>
            <p>Автор:11111111111111111111111111111111111111111111111</p>
            <p>Автор:11111111111111111111111111111111111111111111111</p>
            <p>Автор:11111111111111111111111111111111111111111111111</p>
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