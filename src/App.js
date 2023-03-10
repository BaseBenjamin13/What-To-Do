import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import DoThis from './components/DoThis';

import CouldDo from './components/CouldDo';

function App() {

    const [doThis, setDoThis] = useState()

    const handleSubmit = (e, couldDos) => {
        e.preventDefault();
        const randomIndex = Math.floor(Math.random() * couldDos.length);
        setDoThis(couldDos[randomIndex]);
    }

  return (
    <div className="App">
        <Header />

        {
            doThis ?
            <DoThis doThis={doThis}/> 
            : null
        }

        <CouldDo handleSubmit={handleSubmit} doThis={doThis}/>

    </div>
  );
}

export default App;
