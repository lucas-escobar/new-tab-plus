import React, {useState} from 'react';
import './site.css';

export default function Site(props){
    return(
        <>
            <a 
                className="Button Site__Button" 
                href={props.url} 
                target="_blank" 
                name={props.name}
            >
                <props.icon className="Site__Icon" />
            </a>
        </>
    )
}