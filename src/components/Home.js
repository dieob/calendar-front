import React, { useState } from 'react';
import CalendarItem from './CalendarItem';
import './Home.scss';

function Home(){

        //gym and user details
        const [gym, setGym] = useState('Forever Fit')
        const [user, setUser] = useState({id:1, name:'Diego Baez'})
        const [maxPeople, setMaxPeople] = useState(20)
        const [appointments, setAppointment] = useState([{time:10, people:1},{time:11, people:4},{time:12, people:20},{time:13, people:19}])
        
        // month and dates details
        const [startDay, setStartDay] = useState(2)
        const [today, setToday] = useState(17)
        const [month, setMonth] = useState('Junio')
        const [year, setYear] = useState('2020')
        const [dates, setDates] = useState([-1,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]);

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
                    {dates.map((date, index) => (
                        <CalendarItem key={index}  
                        date={date} today={today}
                        month={month} year={year} 
                        gym={gym} user={user} appointments={appointments}
                        maxPeople={maxPeople}
                        ></CalendarItem>
                    ))}
                </div>
            </div>
        );
}

export default Home;