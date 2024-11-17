import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";

function Widget(props) {
    return (
        <Card className="widget"  sx={{ maxWidth: 400 }}>
        <CardActionArea onClick={props.onClick}>
          <CardMedia className="widget-img"
            component="img"
            height="200"
            image={props.img}
            alt="vr medical"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.title}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {props.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
}

export default Widget;
