import React, { useState } from 'react'
import Site from './Site.jsx'
import { FaRedditAlien } from 'react-icons/fa';
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import './bookmarks.css'

export default function Bookmarks(){
    const [sites, setSites] = useState([
        <Site name="reddit" 
            icon={ FaRedditAlien }
            url="https://reddit.com" 
        />,
        <Site name="linkedin"
            icon={ BsLinkedin }
            url="https://www.linkedin.com" 
        />,
        <Site name="github"
            icon={ BsGithub }
            url="https://www.github.com" 
        />
        ]);

    return(
        <section className="Bookmarks">
            {sites.map(site => site)}
        </section>
    );
}