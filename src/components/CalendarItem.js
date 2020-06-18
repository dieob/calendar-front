import React, { Component } from 'react';

import './CalendarItem.scss';

class CalendarItem extends Component {

    render() {
        return (
            <div className={this.props.date > 0 ? 'calendar-item' : 'calendar-item disabled-item'}>
                <p>{this.props.date}</p>
            </div>
        );
    }
}

export default CalendarItem;
