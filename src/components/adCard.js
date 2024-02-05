import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import "./regform.css"

export default function AdCard({imgLink,adTitle,adText}) {
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
        <Button size="small" color="primary">
          comment
        </Button>
      </CardActions>
    </Card>
    
  );
}