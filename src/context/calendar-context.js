import React, { useReducer, createContext } from "react";

export const CalendarContext = createContext();

const initialState = {
  error: null,
  gym: 'Forever Fit',
  user: 'Diego Baez',
  maxPeople: 20,
  appointments: [
    { day:17, time: 10, people: 1 },
    { day:17, time: 11, people: 4 },
    { day:17, time: 12, people: 20 },
    { day:17, time: 13, people: 19 }
  ],
  //days
  today: 17,
  month: 'Junio',
  year: 2020,
  dates: [-1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_APPOINTMENT':
      return {
        ...state,
        appointments: [...state.appointments.filter(appt => appt.time !== action.payload.time), action.payload]
      };
    case "DEL_APPOINTMENT":
      return {
        ...state,
        appointments: [...state.appointments.filter(appt => appt.time !== action.payload.time), action.payload]
      };
    default:
      throw new Error();
  }
};

export const CalendarContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CalendarContext.Provider value={[state, dispatch]}>
      {props.children}
    </CalendarContext.Provider>
  );
};