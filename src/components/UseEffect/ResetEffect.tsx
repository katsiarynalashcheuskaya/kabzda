import React, {useEffect, useState} from 'react';

export const ResetEffectExample = () => {
    const [counter, setCounter] = useState(1)
    console.log('ResetEffectExample Example' + counter);

    useEffect(()=>{
        console.log('useEffect' + counter);
        return ()=>{
            console.log("Reset effect" + counter)
        }
    }, [counter])


    return <div>
        <hr/>
        Hello, counter: {counter}
        <button onClick={()=>{setCounter(state => state + 1)}}>+</button>
    </div>
};

export const KeysTrackerExample = () => {
    const [text, setText] = useState('')
    console.log('KeysTracker Example   ' + text);

    useEffect(()=>{
        const handler = (e: KeyboardEvent) => {
            console.log(e.key)
            setText(text + e.key)
        }
        window.document.addEventListener('keypress', handler)
        return () => {
            window.document.removeEventListener('keypress', handler)
        }
    }, [text])

    return <div>
        <hr/>
        Typed text: {text}
    </div>

};