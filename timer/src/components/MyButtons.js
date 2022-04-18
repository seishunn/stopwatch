import React from "react";
import uniqid from "uniqid";
import {useState} from "react";

export default function MyButtons({timer, setTimer, setLaps, laps}) {
    const [interv, setInterv] = useState()
    const [status, setStatus] = useState(0)
    let h = timer.hours, m = timer.minutes, s = timer.secondes, ms = timer.millisecondes

    const start = () => {
        if (ms === 100) {
            s++
            ms = 0
        }
        if (s === 60) {
            m++
            s = 0
        }
        if (m === 60) {
            h++
            m = 0
        }
        ms++
        return setTimer({hours: h, minutes: m, secondes: s, millisecondes: ms})
    }
    const timerStart = () => {
        start()
        setStatus(null)
        setInterv(setInterval(start, 10))
    }
    const timerStop = () => {
        clearInterval(interv)
        setStatus(1)
    }
    const timerContinue = () => {
        timerStart()
        setStatus(null)
    }
    const timerRest = () => {
        clearInterval(interv)
        setStatus(0)
        setTimer({hours: 0, minutes: 0, secondes: 0, millisecondes: 0})
    }
    const timerAddLap = () => {
        const newLap = {
            id: uniqid(),
            time: timer
        }
        setLaps([newLap, ...laps])
    }
    const timerClearLap = () => {
        setLaps([])
    }
    return (
        <div className="timer_controls">
            {status === 0
                ? <a href="#" onClick={() => {timerStart()}}>Старт</a>
                : ""
            }
            <a href="#" onClick={() => {timerAddLap()}}>Круг</a>
            {status === 1
                ? <a href="#" onClick={() => {timerContinue()}}>Продолжить</a>
                : <a href="#" onClick={() => {timerStop()}}>Стоп</a>
            }
            <a href="#" onClick={() => {timerRest()}}>Сбросить</a>
            <a href="#" onClick={() => {timerClearLap()}}>Удалить круги</a>
        </div>
    )
}