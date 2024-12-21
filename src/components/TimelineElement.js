import { Button, Typography } from "@mui/material";
import locationIcon from '../assets/icons/location.svg';
import { useEffect, useRef, useState } from "react";
import Tag from "./Tag";

function TimelineElement(props) {

    const [isOpen, setIsOpen] = useState(false);
    const [showReadMoreBtn, setShowReadMoreBtn] = useState(false);
    const textRef = useRef(null);
    useEffect(() => {
        if (textRef.current){
            setShowReadMoreBtn(textRef.current.scrollHeight !== textRef.current.clientHeight);
        }
    }, []);

    const collapsedTextStyle = {
        WebkitLineClamp: 100,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
        display: '-webkit-box', 
    }


    return (
        <div className="timeline-element">
            <div className="timeline-element-img-container">
                {props.icon}
            </div>
            <div className="timeline-element-content-container">
                <Typography variant="h5">{props.title}</Typography>
                {props.isMobileView && <Typography variant="text">{props.date}</Typography>}
                <div className="locationContainer">
                    <img src={locationIcon}></img>
                    <Typography variant="text">{props.location}</Typography>
                </div>
                <Typography align={props.isMobileView ? 'auto' : 'justify'} variant="text" ref={textRef} style={
                    isOpen ? null : collapsedTextStyle
                }>{props.description}</Typography>
                
                {showReadMoreBtn && (
                <Button onClick={()=>setIsOpen(!isOpen)}>{!isOpen ? 'Read more' : 'collapse'}</Button>
                )}
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
