import React, { useCallback, useState } from 'react'
import { ShowIncremento } from './ShowIncremento';

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);
    

    // const increment = () => {

    //     setCounter(counter + 1);
    // }

    const increment = useCallback( (num) => {

      setCounter( c => c + num);
    }, [setCounter]);

    return (
        <div>
            <h1>useCallback Hook</h1>
            <hr />

            <p>Counter: {counter}</p>

            <ShowIncremento incremento={increment} />
        </div>
    )
}
