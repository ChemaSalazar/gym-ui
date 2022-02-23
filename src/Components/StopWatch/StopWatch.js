import React, { useState } from "react";
import "./StopWatch.css";
import Timer from "../Timer/Timer";
import ControlButtons from "../ControlButtons/ControlButtons";
import Equipment from "../../Equipment";
import eventBus from "../EventBus/EventBus";

function StopWatch() {
    const [isActive, setIsActive] = useState(false);
    const [isPaused, setIsPaused] = useState(true);
    const [time, setTime] = useState(0);

    React.useEffect(() => {
        let interval = null;

        if (isActive && isPaused === false) {
            interval = setInterval(() => {
                setTime((time) => time + 10);
            }, 10);
        } else {
            clearInterval(interval);
        }
        return () => {
            clearInterval(interval);
        };
    }, [isActive, isPaused]);

    const handleStart = () => {
        setIsActive(true);
        setIsPaused(false);
        eventBus.dispatch("toggleMachine",{isOn: true});


    };

    const handlePauseResume = () => {
        setIsPaused(!isPaused);
        eventBus.dispatch("toggleMachine",{isOn: false });

    };

    const handleReset = () => {
        setIsActive(false);
        setTime(0);
    };

    return (
        <div className="stop-watch">
            <Timer time={time} />
            <Equipment/>
            <ControlButtons
                active={isActive}
                isPaused={isPaused}
                handleStart={handleStart}
                handlePauseResume={handlePauseResume}
                handleReset={handleReset}
            />

        </div>
    );
}

export default StopWatch;
