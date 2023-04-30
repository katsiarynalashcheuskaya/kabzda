import React, {useEffect, useState} from "react";
import {AnalogClockView} from "./AnalogClock";
import {DigitalClockView} from "./DigitalClockView";

type PropsType = {
    mode?: 'digital' | 'analog';
}

export const Clock: React.FC<PropsType> = (props) => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date())
        }, 1000);
        return () => {
            clearInterval(intervalId)
        }
    }, [])

    let view;
    //или так:
    switch (props.mode) {
        case 'analog':
            view = <AnalogClockView date={date}/>
            break;
        case 'digital'
:
        default:
            view = <DigitalClockView date={date}/>
    }

    return <div>
        {view}
    </div>
}

export type ClockViewPropsType = {
    date: Date;
}