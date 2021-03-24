import { useMemo, useState } from "react";
import { procesoPesado } from "../../helpers/procesoPesado";
import { useCounter } from "../../hooks/useCounter";

export const MemoHook = () => {

  const { counter, increment } = useCounter( 1000 );
  const [show, setShow] = useState(true);

  

  const memoProcesoPesado = useMemo( () => procesoPesado(counter), [ counter ] );

  return (
    <div>
      <h1>MemoHook</h1>
      <hr />

      <p className="mt-6">
        Counter: <small> {counter} </small>
      </p>

      <p>{memoProcesoPesado }</p>

      <button
        className="btn bg-blue-600 text-white | hover:bg-blue-900"
        onClick={increment}
      >
        +1
      </button>

      <button
        className="btn border border-gray-300 | hover:bg-gray-600 hover:text-white | ml-3"
        onClick={() => {
          setShow(!show);
        }}
      >
        Show / Hide {JSON.stringify(show)}
      </button>
    </div>
  );
};
