import { Card, CardActionArea, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";

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
              Anxiety : Revelation of Mind
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Horror Survivial set during WWI. With object based physic puzzles
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
}

export default Widget;
