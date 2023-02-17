import React, {useEffect, useState} from "react";

type PropsType = {

}

export const Clock: React.FC<PropsType> = (props) => {
    const [data, setDate] = useState(new Date())

    useEffect(()=>{
        const intervalId = setInterval(()=>{
            setDate(new Date())
        }, 1000);
        return ()=>{
            clearInterval(intervalId)
        }
    }, [])

    const secondsString = data.getSeconds() < 10 ? '0' + data.getSeconds() : data.getSeconds()

    return <div>
        <span>{data.getHours()}</span>
        :
        <span>{data.getMinutes()}</span>
        :
        <span>{secondsString}</span>

    </div>
}