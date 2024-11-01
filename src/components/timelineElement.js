import { Typography } from "@mui/material";
import locationIcon from '../assets/icons/location.svg';
import Tag from "./tag";

function TimelineElement(props) {
    return (
        <div className="timeline-element">
            <div className="timeline-element-img-container">
                {props.icon}
            </div>
            <div className="timeline-element-content-container">
                <Typography variant="h5">{props.title}</Typography>
                <div className="locationContainer">
                    <img src={locationIcon}></img>
                    <Typography variant="text">{props.location}</Typography>
                </div>
                <Typography variant="text">{props.description}</Typography>
                {props.tags && props.tags.length > 0 && (
                    <div className="tags">
                        {props.tags.map((txt, index) => (
                            <Tag key={index} text={txt} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default TimelineElement;