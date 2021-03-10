import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";

import logo from "../../images/logo-breakingbad.png";
import "./style.css";

export const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter(1);

    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    // console.log(data);

    const { author, quote } = !!data && data[0];
    
    return (
      <div className="container">
        <div>
          <h1 className="text-bold">BreakingBad Quotes</h1>
          <hr />

          {loading ? (
            <div className="alert alert-info | mt-5">Loading...</div>
          ) : (
            <blockquote className="blockqquote text-right">
              <p className="mt-5 mb-3">{quote}</p>
              <footer className="blockquote-footer">{author}</footer>
            </blockquote>
          )}

          <div className="d-flex justify-content-end">
            <button onClick={increment} className="btn btn-dark">
              Siguiente frase
            </button>
          </div>
        </div>

        <div className="logo__container">
            <img src={logo} alt="logo Breaking Bad" className="logo"/>
        </div>
      </div>
    );
}
