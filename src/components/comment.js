import React from 'react';

import {Dialog, DialogActions,  DialogContent,
   DialogContentText, DialogTitle, Button, TextField} from "@mui/material";

export default function Comment() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  
  return (
    <div>
      <Button onClick={handleClickOpen()}>Посмотреть комментарии</Button>
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
    </div>
  );
};