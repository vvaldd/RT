import React, { useState, useMemo, memo, useCallback, useEffect, useRef } from "react";
import './App.css';

// const fn = (a, b) => {  /*useMemo*/
//     console.log('called');
//     return Math.pow(a, b);
// }

// const Child = memo(() => { /**memo что бы не ререндились компоненты (дочерние) */
//     const [counter, setCounter] = useState(0);
//     const inc = () => {
//         setCounter(prev => prev + 1); /*useState callback для выполнения когда необходимо получать предыдущее значение*/

//     }
//     console.log('chield');
//     return (
//         <div>
//             <h3>chield comp</h3>
//             <button onClick={inc}>{counter}</button>
//         </div>
//     );
// })

function App() {
    const [counter, setCounter] = useState(0);
    const [counter1, setCounter1] = useState(1);

    const inc = useCallback(() => { /**для сохранения функции, если есть внешние зависимости, не забыть добавить в депсы, использовать когда чилды обернуты в memo и получают пропсой функцию */
        setCounter(prev => prev + 1); /*useState callback для выполнения когда необходимо получать предыдущее значение*/
    }, [])

    const inc1 = useCallback(() => {
        setCounter1(prev => prev + 1); /*useState callback*/

    }, [])
    // useEffect (() => {
    //     console.log(counter);
    // }, [counter])


    // const complexLogic = useMemo(() => {     /*useMemo для сохранения результатов тяжелых расчетных функций, что бы не вызывать функцию каждый раз при рендере*/
    //     return fn(4, counter1)
    // }, [counter1]);

    // console.log(complexLogic);

    return (
        <div className={counter === 2 ? "App2" : "App"}>


            <button onClick={inc}>{counter}</button>
            <button onClick={inc1}>{counter1}</button>
            {/* <Child inc={inc}></Child> */}
        </div>
    );
}

export default App;


