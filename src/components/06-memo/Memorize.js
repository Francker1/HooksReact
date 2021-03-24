import { useState } from "react";
import { useCounter } from "../../hooks/useCounter";
import { Small } from "./Small";

export const Memorize = () => {

    const {counter, increment } = useCounter(10);
    const [ show, setShow ] = useState(true);

    return (
        <div>
            <h1>Memorize</h1>
            <hr />

            <p className="mt-6">Counter: <Small value={ counter } /></p>

            <button className="btn bg-blue-600 text-white | hover:bg-blue-900" onClick={ increment }>
                +1
            </button>

            <button className="btn border border-gray-300 | hover:bg-gray-600 hover:text-white | ml-3" onClick={ () => {
                setShow( !show );
            } }>
                Show / Hide { JSON.stringify( show ) }
            </button>
        </div>
    )
}
