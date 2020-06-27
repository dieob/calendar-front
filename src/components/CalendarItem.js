import React, { useState , useContext} from 'react';
import { Modal as MainModal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import { Segment, Button, Icon, Modal, Divider } from 'semantic-ui-react';
import {CalendarContext} from '../context/calendar-context';

import './CalendarItem.scss';

function CalendarItem(props) {

    const [openModal, setOpenModal] = useState(null);
    const [openConfirmation, setOpenConfirmation] = useState(false);
    const [newAppointment, setNewAppointment] = useState([{time:0, people:0}])

    const [state, dispatch] = useContext(CalendarContext);

    const addAppointment = appointmentObj => {
        appointmentObj.people = appointmentObj.people + 1;

        dispatch({
            type: "ADD_APPOINTMENT",
            payload: appointmentObj
        });
    };

    const onAddAppointment = () => {
        addAppointment(newAppointment);
        setOpenConfirmation(false);
    };

    const onOpenModal = () => {
        setOpenModal(true)
    }

    const onCloseModal = () => {
        setOpenModal(false)
    }

    const show = (appt) => {
        setOpenConfirmation(true);
        setNewAppointment(appt)
    }

    const close = () => setOpenConfirmation(false)

    const cancelConfirmAppt = () => {
        console.log('cancelled');
        setOpenConfirmation(false);
        //add new appointment to appointments in the context
    }

    return (
        <>
            <div className={props.date > 0 ? 'calendar-item' : 'calendar-item disabled-item'} onClick={() => { onOpenModal() }}>
                <p className={props.date === props.today ? 'today' : ''}>{props.date}</p>
            </div>
            <MainModal open={openModal} onClose={onCloseModal} blockScroll={false} animationDuration={700} center>
                <div className="appointment-modal">
                    <div className="modal-title">
                        <div className="appointment-modal-gym">{props.gym}</div>
                        <div className="appointment-modal-date">{props.date + '/' + props.month + '/' + props.year}</div>
                    </div>
                    <div>
                        {props.appointments.sort((a, b) => (a.time > b.time) ? 1 : -1).map((appt,index) => (
                                <Segment key = {index} disabled={appt.people >= props.maxPeople}>
                                    <div className="segment-data">
                                        <div className="gym-times">{appt.time + ' a ' + (parseInt(appt.time) + 1) + ' hs'}</div>
                                        <div className="amount-people">{appt.people} <Icon name="user"></Icon></div>
                                        <Button disabled={appt.people >= props.maxPeople} onClick={() => show(appt)} circular icon='add' />
                                    </div>
                                </Segment>
                        ))}
                    </div>
                    <Modal size='mini' open={openConfirmation} onClose={close}>
                            <Modal.Header>Confirmar turno</Modal.Header>
                            <Modal.Content>
                                <div className="confirmation-container">
                                    <div className="confirmation-name">
                                        {props.user}
                                    </div>
                                    <Divider></Divider>
                                    <div>
                                        
                                    </div>
                                    <Divider></Divider>
                                    <div className="confirmation-time">
                                        {newAppointment.time + ' a ' + (parseInt(newAppointment.time) + 1) + ' hs'}
                                    </div>
                                </div>
                            </Modal.Content>
                            <Modal.Actions>
                                <Button 
                                    negative 
                                    onClick={()=> cancelConfirmAppt()}
                                    icon='delete'
                                    labelPosition='right'
                                    content='No'
                                />
                                <Button
                                    onClick={() => onAddAppointment(newAppointment)}
                                    positive
                                    icon='checkmark'
                                    labelPosition='right'
                                    content='Si'
                                />
                            </Modal.Actions>
                        </Modal>
                </div>
            </MainModal>
        </>
    );
}

export default CalendarItem;