import React, {useState} from 'react';
import './site.css';

export default function Site(props){
    return(
        <>
            <a className="btn site__btn" 
                href={props.url} 
                target="_blank" 
                name={props.name}
            >
                <props.icon className="bookmark__icon" />
            </a>
        </>
    )
}