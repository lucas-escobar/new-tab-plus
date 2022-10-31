import { gapi } from 'gapi-script';
import React, {useState, useEffect} from 'react';
import {BsFillCalendarEventFill} from 'react-icons/bs'
import './calendar.css';

export default function Calendar(){
    const [events, setEvents] = useState([]);
    const [signInStatus, setSigninStatus] = useState(false);
    const scope = "https://www.googleapis.com/auth/calendar.events \
                https://www.googleapis.com/auth/calendar";
    const apiKey = process.env.REACT_APP_API_KEY;
    const clientId = process.env.REACT_APP_CLIENT_ID;
    const accessToken = process.env.REACT_APP_GOOGLE_ACCESS_TOKEN;
    const calendarId = process.env.REACT_APP_CALENDAR_ID;
    const requestPath = `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events`;

    useEffect(() => {
        gapi.load("client:auth2", initClient);
    }, [])

    useEffect(() => {
        if (signInStatus === true)
            makeApiCall().then(
                (response) => {console.log(response)}
            ).catch(
                (error) => {console.log(error)}
            );
    }, [])

    function initClient() {
        gapi.client
            .init({
                apiKey: apiKey, 
                clientId: clientId, 
                scope: scope 
            }).then(() => {
                setSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
                console.log(signInStatus);
            }).catch((err) => {
                console.log(err);
            })
    }


    function makeApiCall(){
        if (typeof gapi.client !== 'undefined'){
            return gapi.client.request({
              path: requestPath
            });
        }
    }


    return (
        <section className="Calendar">
            <button onClick={() => gapi.auth2.getAuthInstance().signIn()}>Sign In</button>
            <div>{events}</div>
        </section>
    )
}