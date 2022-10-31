import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { AiFillGoogleCircle, AiOutlineSearch } from 'react-icons/ai';
import { FaYandexInternational } from 'react-icons/fa';
import { SiDuckduckgo } from 'react-icons/si';
import './search.css';

const searchEngines = [
    {siteName: "duckduckgo", icon: <SiDuckduckgo className="Icon" />},
    {siteName: "google", icon: <AiFillGoogleCircle className="Icon" />},
    {siteName: "yandex", icon: <FaYandexInternational className="Icon" />}
];

export default function Search(){
    const [query, setQuery] = useState('');
    const [engine, setEngine] = useState(searchEngines[0]);

    function handleClick(e){
        console.log(e.target.key);
        setEngine(searchEngines[e.target.key]);
    }

    return(
        <section className="Search">
            <DropdownButton
                className="Search__Dropdown"
                variant="custom"
                style={{color: '#00B1E1'}}
                title={engine.icon}
            >
                {searchEngines.map((engine) => 
                    <Dropdown.Item 
                        className="Search__EngineLogo"
                        key={engine.siteName} 
                        onClick={handleClick}
                    >
                        {engine.icon}
                    </Dropdown.Item>
                )}
            </DropdownButton>
            <form 
                className="Search__Bar" 
                action={query}
                method="get"
                target="_blank"
            >
                <input 
                    className="Search__Input" 
                    type="text" 
                    placeholder="Search"
                    onChange = {(e) => {setQuery(
                        "https://"+engine+".com/search?q="+e.target.value
                        )}
                    }
                />
                <button className="Search__Button" type="submit">
                    <AiOutlineSearch className="Search__Icon"/>
                </button>
            </form>
        </section> 
    )
}