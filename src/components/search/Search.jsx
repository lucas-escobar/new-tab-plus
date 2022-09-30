import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { AiFillGoogleCircle, AiOutlineSearch } from 'react-icons/ai';
import { FaYandexInternational } from 'react-icons/fa';
import { SiDuckduckgo } from 'react-icons/si';
import { IconContext } from 'react-icons';
import './search.css';

//const iconColor = getComputedStyle(document.body).style.getPropertyValue('--color-secondary');

const searchEngines = [
    {siteName: "duckduckgo", icon: <SiDuckduckgo className="icon" />},
    {siteName: "google", icon:  <AiFillGoogleCircle className="icon" />},
    {siteName: "yandex", icon: <FaYandexInternational className="icon" />}
];

export default function Search(){
    const [query, setQuery] = useState('');
    const [engine, setEngine] = useState(searchEngines[0]);

    function handleClick(e){
        console.log(e.target.key);
        setEngine(searchEngines[e.target.key]);
    }

    return(
        <section className="search">
            <DropdownButton className="search__dropdown"
                variant="custom"
                style={{ color: '#00B1E1'}}
                title={engine.icon}
            >
                {searchEngines.map((engine) => 
                    <Dropdown.Item className="search__engineLogo" key={engine.siteName} 
                    onClick={handleClick}>
                        {engine.icon}
                    </Dropdown.Item>
                )}
            </DropdownButton>
            <form 
                className="search__bar" 
                action={query}
                method="get"
                target="_blank"
            >
                <input 
                    className="search__input" 
                    type="text" 
                    placeholder="Search"
                    onChange = {(e) => {setQuery(
                        "https://"+engine+".com/search?q="+e.target.value
                        )}
                    }
                />
                <button className="search__btn" type="submit">
                    <AiOutlineSearch className="search-icon"/>
                </button>
            </form>
        </section> 
    )
}