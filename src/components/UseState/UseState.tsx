import React, {useMemo, useState} from "react";

function generateData(){
    //какие-то сложныеб долгие вычисления
/*    console.log('generateData')*/
    return 2332532552;
}

export const Example1 = () => {
   /* console.log('Example 1');*/

    /*const initValue = useMemo(generateData, [])*/

    // useState не может в counter засетать функцию, он засетает значение, которое возвращает функция,
    // причем сделает это только один раз, поэтому можно использовать напрямую функцию, вместо useMemo,
    // чтобы избежать каждый раз лишнего вызова уже не нужной функции с долгими вычислениями

    // такой трюк юз стейта оптимально использовать при долгих вычислениях

    const [counter, setCounter] = useState(generateData) // [0, function(newValue){}]

   /* const changer = (state: number) => state + 1*/

    return <>
        <button onClick={()=>{setCounter(state => state + 1)}}>+</button>
        {counter}
    </>
}