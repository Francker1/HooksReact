import { useCounter } from "../../hooks/useCounter";

export const CounterWithCustomHook = () => {

    const { state, increment, decrement, reset } = useCounter(100);

    return (
      <>
        <h1>Counter {state}</h1>
        <hr />

        <button
          className="btn bg-blue-500 rounded text-white | p-2"
          onClick={() => increment()}
        >
          +1
        </button>
        <button
          className="btn bg-red-500 rounded text-white | p-2"
          onClick={() => decrement(1)}
        >
          -1
        </button>

        <hr />

        <button
          className="btn bg-blue-500 rounded text-white | p-2"
          onClick={() => increment(10)}
        >
          +10
        </button>
        <button
          className="btn bg-red-500 rounded text-white | p-2"
          onClick={() => decrement(10)}
        >
          -10
        </button>

        <hr />
        <button className="btn bg-gray-300 | py-2 px-4 mt-2" onClick={() => reset()}>Reset</button>
      </>
    );
}
