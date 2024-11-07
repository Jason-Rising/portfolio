import { Typography } from "@mui/material";

function Tag(props){
    return (
        <div className="tagContainer">
            <Typography variant="text">{props.text}</Typography>
        </div>
    );
}

export default Tag;
