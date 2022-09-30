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
        <section className="tasks">
            <ul className="tasks__list">
                {tasks.map((task, index) => <li key={index}>{task}</li>)}
            </ul>
            <form className="tasks__form" onSubmit={handleSubmit}>
                <input 
                    className="tasks__input"
                    type="text"
                    placeholder="Enter task"
                    value={input} 
                    onChange={(e) => {setInput(e.target.value)}} 
                />
                <button className="tasks__btn" type="submit"><GrFormAdd className="add-icon"/></button>
            </form>
        </section>
    );
}