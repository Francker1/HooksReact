import { useState } from "react";
import { MultipleCustomHooks } from "../03-example/MultipleCustomHooks"

export const RealExampleRef = () => {

    const [show, setShow] = useState(false);
    
    return (
      <>
        <div className="mb-5">
          <h1>Real Example Ref</h1>
          <hr></hr>

          <button
            className="btn btn-dark mt-4"
            onClick={() => {
              setShow(!show);
            }}
          >
            Show/Hide
          </button>
        </div>

        {show && <MultipleCustomHooks />}
      </>
    );
}
