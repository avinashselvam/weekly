import React from 'react'
import './app.css'

import Week from './week'
import Calendar from './calendar';

function App() {
  return (
    <div className="App">
      <Calendar></Calendar>
      <Week></Week>
    </div>
  );
}

export default App
