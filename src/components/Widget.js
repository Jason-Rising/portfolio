import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import React, { useState } from 'react';

function Widget(props) {
  const [isLoaded, setIsLoaded] = useState(false);
  const fadeInStyle = {
    opacity: isLoaded ? 1 : 0, 
    transition: 'opacity 0.5s ease-in-out', 
  };

    return (
        <Card className="widget" >
        <CardActionArea onClick={props.onClick}>
          <CardMedia className="widget-img"
            component="img"
            height="200"
            image={props.img}
            alt="todo"
            onLoad={() => setIsLoaded(true)}
          > 
          </CardMedia>
          <CardContent sx={{minHeight: '95px'}}>
            <Typography gutterBottom variant="h5" component="div">
              {props.title}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary'}}>
              {props.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
}

export default Widget;
