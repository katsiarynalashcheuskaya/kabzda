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

export default ResetEffectExample;