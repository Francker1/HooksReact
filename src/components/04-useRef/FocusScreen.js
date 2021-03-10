import { useRef } from "react";

export const FocusScreen = () => {

    //useRef se usa normalmente para mantener una referencia mutable a un elemento
    const inputRef = useRef();
    // console.log(ref)

    const handleClick = () => {
        
        inputRef.current.select();
    }

    return (
      <div>
        <div className="mb-5">
          <h1>Focus Screen</h1>
          <hr />
        </div>

        <input
          ref={inputRef}
          className="form-control"
          placeholder="Su nombre"
        />
        <button
          className="btn btn-outline-primary | mt-4"
          onClick={handleClick}
        >
          Focus
        </button>
      </div>
    );
}
