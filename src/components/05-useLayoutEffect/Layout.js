
import { useLayoutEffect, useRef, useState } from "react";
import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";

import logo from "../../images/logo-breakingbad.png";
import "./layout.css";

export const Layout = () => {

  const { counter, increment } = useCounter(1);

  const { data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const { quote } = !!data && data[0];
  
  const pTag = useRef();

  const [boxSize, setBoxSize] = useState({});

  useLayoutEffect(() => {
    
    setBoxSize(pTag.current.getBoundingClientRect());
  }, [quote])

  

  return (
    <div className="container">
      <div>
        <h1 className="text-bold">LayoutEffect</h1>
        <hr />

        <blockquote className="blockquote text-right">
          <p className="mt-5 mb-3" ref={ pTag }>{quote}</p>
        </blockquote>

        <pre>
          { JSON.stringify(boxSize, null, 3)}
        </pre>

        <div className="d-flex justify-content-end">
          <button onClick={increment} className="btn btn-dark">
            Siguiente frase
          </button>
        </div>
      </div>

      <div className="logo__container">
        <img src={logo} alt="logo Breaking Bad" className="logo" />
      </div>
    </div>
  );
};
