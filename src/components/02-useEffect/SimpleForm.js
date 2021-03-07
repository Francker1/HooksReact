import { useEffect, useState } from "react";
import "./effects.css";
import { Message } from "./Message";

//El useEffect es un Hook que nos permitirá ejecutar algún efecto secundario cuando algo suceda en nuestro componente

export const SimpleForm = () => {

    const [ formState, setFormState] = useState({
        name: "",
        email: "",
    });

    const { name, email } = formState;

    useEffect(() => {
        // console.log("hey!");
    }, []);

    useEffect(() => {
    //   console.log("formState cambió");
    }, [formState]);

    useEffect(() => {
    //   console.log("email cambió");
    }, [email]);


    const handleInputChange = ({target}) => {
        
        setFormState({
            ...formState,
            [target.name]: target.value
        })
    }

    return (
      <>
        <h1 className="mb-2">useEffect</h1>
        <hr />

        <div className="form-group | mt-2">
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Tu nombre"
            autoComplete="off"
            value={name}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            name="email"
            className="form-control"
            placeholder="Tu email"
            autoComplete="off"
            value={email}
            onChange={handleInputChange}
          />
        </div>

        {name === "123" && <Message />}
      </>
    );
}
