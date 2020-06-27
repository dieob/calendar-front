import React from 'react';
import './App.scss';
import Home from './Home';
import { CalendarContextProvider } from "../context/calendar-context";

function App() {

  return (
      <CalendarContextProvider>
        <Home></Home>
      </CalendarContextProvider>
  );
}

export default App;
