import React, {useState} from 'react'
import {GrFormAdd} from 'react-icons/gr'
import './tasks.css'

export default function Tasks() {
    const [tasks, setTasks] = useState(["Do something"]);
    const [input, setInput] = useState('');

    function handleSubmit(event){
        setTasks([...tasks, input]);
        setInput('');
        event.preventDefault();
    }

    return (
        <section className="Tasks">
            <ul className="Tasks__List">
                {tasks.map((task, index) => <li key={index}>{task}</li>)}
            </ul>
            <form className="Tasks__Form" onSubmit={handleSubmit}>
                <input 
                    className="Tasks__Input"
                    type="text"
                    placeholder="Enter task"
                    value={input} 
                    onChange={(e) => {setInput(e.target.value)}} 
                />
                <button className="Tasks__Button" type="submit"><GrFormAdd className="Icon--Add"/></button>
            </form>
        </section>
    );
}