import { Card, CardActionArea, CardContent, Typography } from "@mui/material";

function Widget(props) {
  const blurredBackground = {
    backgroundImage: `url(${props.imgS})`,
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: " ", 
  };
  
    return (
        <Card className="widget" >
        <CardActionArea onClick={props.onClick}>
          <div  className="widget-img" style={blurredBackground}>
            <img src={props.img} />
          </div>
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