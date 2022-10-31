import React, {useState, useEffect, useRef, useMemo} from 'react'
import {GoBriefcase} from 'react-icons/go'
import {FaCoffee} from 'react-icons/fa'
import './pomodoro.css'
import { SiEightsleep } from 'react-icons/si';

export default function Pomodoro(props){
    /**
     * Simple pomodoro timer consisting of start/stop toggle and work/break toggle.
     */
    const [isOn, setIsOn] = useState(false);
    const [isBreak, setIsBreak] = useState(false);
    const [workBreakSplit, setWorkBreakSplit] = useState(props.workBreakMins);
    const [secondsRemaining, setSecondsRemaining] = useState(props.workBreakMins.work);

    // Audio from https://www.zapsplat.com/?s=gong&post_type=music&sound-effect-category-id
    const audio = useMemo(() => new Audio('../../assets/gong-1.mp3'), []);
    const timer = useRef();

    function toTimeFormat(seconds){
        // Converts time in seconds to MM:SS or HH:MM:SS format
        const date = new Date(null);
        date.setSeconds(seconds);
        const isLongerThanHour = seconds > 60*60;
        return isLongerThanHour ? 
            date.toISOString().substring(11, 19) : date.toISOString().substring(14,19);
    }

    function expiredTimerCheck(seconds){
        if (seconds === 0){
            clearInterval(timer.current);
            setIsBreak(!isBreak);
            setIsOn(false);
        }
    }

    function decrementTimer(){
        // Decrements pomodoro timer every 1000ms
        timer.current = setInterval(() => {
            setSecondsRemaining((seconds) => {
                expiredTimerCheck(seconds);
                return seconds - 1; 
            })
        }, 1000)
    }

    useEffect(() => {
        audio.play();
        if (isOn) { decrementTimer() }
        else { clearInterval(timer.current) }
        return () => clearInterval(timer.current);
    }, [isOn])

    useEffect(() => {
        setSecondsRemaining(
            (isBreak ? workBreakSplit.break : workBreakSplit.work) * 60
        );
    }, [isBreak])

    /*useEffect(() => {
        audio.onended()
    })*/

    return(
        <section className="Pomodoro">
            <div className="Pomodoro__ModeSelect">
                <button className="Pomodoro__Icon--Work" 
                    onClick={() => {
                        setIsBreak(false);
                        setIsOn(false);}
                    }
                    style={{color: !isBreak ? "var(--color-secondary)" : "var(--color-on-primary)"}}
                >
                    <GoBriefcase />
                </button>
                <button className="Pomodoro__Icon--Break" 
                    onClick={() => {
                        setIsBreak(true);
                        setIsOn(false);}
                    }
                    style={{color: isBreak ? "var(--color-secondary)" : "var(--color-on-primary)"}}
                >
                    <FaCoffee />
                </button>
            </div>
            <div className="Pomodoro__Time">{toTimeFormat(secondsRemaining)}</div>
            <button className="Pomodoro__StartToggle" onClick={() => setIsOn(!isOn)}>
                {!isOn ? "Start" : "Pause"}
            </button>
        </section>
    )
}
