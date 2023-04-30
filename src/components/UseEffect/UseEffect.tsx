import React, {useEffect, useState} from "react";

export const SimpleExample = () => {
    /*console.log('Simple example');*/

    const [counter, setCounter] = useState(1)

    useEffect(()=>{
        /*console.log('useEffect every render');*/
        document.title = counter.toString();
        // side effects:
        // api.getUsers().then('')
        // setInterval
        // indexedDB
        // document.getElementId
        // document.title = 'User'
    })

    useEffect(()=>{
        /*console.log('useEffect only first render (componentDidMount)');*/
        document.title = counter.toString();
        // side effects:
        // api.getUsers().then('')
        // setInterval
        // indexedDB
        // document.getElementId
        // document.title = 'User'
    }, [])

    useEffect(()=>{
    /*    console.log('useEffect first render and every time counter changes');*/
        document.title = counter.toString();
        // side effects:
        // api.getUsers().then('')
        // setInterval
        // indexedDB
        // document.getElementId
        // document.title = 'User'
    }, [counter])

    return <>
        <button onClick={()=>{setCounter(state => state + 1)}}>+</button>
        {counter}
    </>
}

export const SetTimeoutExample = () => {
   /* console.log('SetTimeout Example');*/

    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)

    useEffect(()=>{
       /* console.log('useEffect');*/
     /*   document.title = counter.toString();*/
        /*setInterval(()=>{
            console.log('tick: '+ counter)
            setCounter(state=>state+1)
        },1000)*/
        // side effects:
        // api.getUsers().then('')
        // setInterval
        // indexedDB
        // document.getElementId
        // document.title = 'User'
    }, [])


    return <div>
        Hello, counter: {counter} - fake: {fake}
        {/*<button onClick={()=>{setCounter(state => state + 1)}}>+</button>
        {counter}
        <button onClick={()=>{setFake(fake + 1)}}>+</button>*/}
    </div>
}