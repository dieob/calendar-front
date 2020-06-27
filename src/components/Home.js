import React, { useState, useContext } from 'react';
import CalendarItem from './CalendarItem';
import './Home.scss';
import {CalendarContext} from '../context/calendar-context';

function Home() {

    const [state, dispatch] = useContext(CalendarContext);

    return (
        <div>
            <div className="days-container">
                <div className="day-of-the-week">Lun</div>
                <div className="day-of-the-week">Mar</div>
                <div className="day-of-the-week">Mie</div>
                <div className="day-of-the-week">Jue</div>
                <div className="day-of-the-week">Vie</div>
                <div className="day-of-the-week">Sab</div>
                <div className="day-of-the-week">Dom</div>
            </div>
            <div className="calendar-container">
                {state.dates.map((date, index) => (
                    <CalendarItem key={index}
                        date={date} today={state.today}
                        month={state.month} year={state.year}
                        gym={state.gym} user={state.user} appointments={state.appointments}
                        maxPeople={state.maxPeople}
                    ></CalendarItem>
                ))}
            </div>
        </div>
    );
}

export default Home;