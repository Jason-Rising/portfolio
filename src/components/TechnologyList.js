import { Typography } from '@mui/material';
import React from 'react';

const TechnologyList = ({items}) => { 
    return (
        <ul className="image-list">
        {items?.map((item) => (
            <li>
                <img src={item.image} className="list-icon"/>
                <Typography variant='text' className="list-text">{item.text}</Typography>
            </li>
        ))}
        </ul>
    );
  };
  
  export default TechnologyList;