import React from "react";
import ShowTime from "./ShowTime";

export default function Laps({laps, timerRemoveLap}) {
    return (
        <>
            {laps.length === 0
                ? <div>Кругов нет</div>
                : laps.map(lap =>
                    <div className="lap" key={lap.id}>
                        <div>
                            <ShowTime time={lap.time}/>
                        </div>
                        <div className="lap_btn">
                            <button onClick={() => timerRemoveLap(lap.id)}>Удалить</button>
                        </div>
                    </div>
                )
            }
        </>
    )
}