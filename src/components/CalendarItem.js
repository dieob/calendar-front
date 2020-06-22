import React, { useState } from 'react';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import { Segment, Button, Icon } from 'semantic-ui-react';

import './CalendarItem.scss';

function CalendarItem(props) {

    const [openModal, setOpenModal] = useState(null);

    const onOpenModal = () => {
        setOpenModal(true)
    }

    const onCloseModal = () => {
        setOpenModal(false)
    }

    return (
        <>
            <div className={props.date > 0 ? 'calendar-item' : 'calendar-item disabled-item'} onClick={() => { onOpenModal() }}>
                <p className={props.date === props.today ? 'today' : ''}>{props.date}</p>
            </div>
            <Modal open={openModal} onClose={onCloseModal} blockScroll={false} animationDuration={700} center>
                <div className="appointment-modal">
                    <div className="modal-title">
                        <p className="appointment-modal-gym">{props.gym}</p>
                        <p className="appointment-modal-date">{props.date + '/' + props.month + '/' + props.year}</p>
                    </div>
                    <div>
                        {props.appointments.map(appt => (
                            <>
                                <Segment disabled={ appt.people >= props.maxPeople}>
                                    <div className="segment-data">
                                        <div className="gym-times">{appt.time + ' a ' + (parseInt(appt.time) + 1) + ' hs'}</div>
                                        <div className="amount-people">{appt.people} <Icon name="user"></Icon></div>
                                        <Button disabled={ appt.people >= props.maxPeople} raised circular icon='add'/>
                                    </div>
                                </Segment>
                            </>
                        ))}
                    </div>
                </div>
            </Modal>
        </>
    );
}

export default CalendarItem;