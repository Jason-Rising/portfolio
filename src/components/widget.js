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
              VR Meddical Eye Simulation
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Freelance project for VR simulation for different eye conditions.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
}

export default Widget;