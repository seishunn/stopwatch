import React, {useState} from 'react';
import './App.css';
import MyButtons from "./components/MyButtons";
import ShowTime from "./components/ShowTime";
import {Transition} from "react-transition-group";
import Laps from "./components/Laps";

function App() {
    const [timer, setTimer] = useState({
        hours: 0,
        minutes: 0,
        secondes: 0,
        millisecondes: 0
    })
    const [laps, setLaps] = useState([])

    const timerRemoveLap = (id) => {
        setLaps(laps.filter(lap => lap.id !== id))
    }
  return (
    <div className="App">
        <main className="main">
            <MyButtons timer={timer} setTimer={setTimer} laps={laps} setLaps={setLaps}/>
            <div className="timer">
                <div>
                    <ShowTime time={timer}/>
                </div>
            </div>
            <div className="timer_laps">
                <Laps laps={laps} timerRemoveLap={timerRemoveLap}/>
            </div>
        </main>
    </div>
  );
}

export default App;
