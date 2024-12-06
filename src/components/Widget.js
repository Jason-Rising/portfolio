import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";

function Widget(props) {
    return (
        <Card className="widget"  sx={{ maxWidth: '350px', minWidth: '335px'}}>
        <CardActionArea onClick={props.onClick}>
          <CardMedia className="widget-img"
            component="img"
            height="200"
            image={props.img}
            alt="todo"
            sx={{ height: "140" }}
          />
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
