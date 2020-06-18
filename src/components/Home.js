import React, { Component } from 'react';
import CalendarItem from './CalendarItem';
import './Home.scss';

class Home extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            startDay : 2,
            dates: [-1,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
        }
    }

    render() {
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
                    {this.state.dates.map((date, index) => (
                        <CalendarItem key={index}  
                        date={date}></CalendarItem>
                    ))}
                </div>
            </div>
        );
    }
}

export default Home;