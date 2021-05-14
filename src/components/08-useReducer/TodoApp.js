import React, { useReducer } from 'react';
import { todoReducer } from './todoReducer';
import { useForm } from '../../hooks/useForm';

import './style.css';

const init = () => {

    return [{
        id: new Date().getTime(),
        desc: 'Aprender React',
        done: false,
    }];
}

export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init);

    const [ {description}, handleInputChange, reset ] = useForm({
        description: "",
    })

    console.log(description);

    const handleSubmit = (e) => {
        e.preventDefault();

        if ( description.trim().length <= 1 ){
            return;
        }

        const newTodo = { 
            id: new Date().getTime(),
            desc: description,
            done: false,
        };

        const action = {
            type: "add",
            payload: newTodo,
        }

        dispatch(action);
        reset();
    }

    return (
      <div>
        <h1>TodoApp ( total: {todos.length} )</h1>
        <hr />

        <div className="row">
            <div className="col-7">
                <ul className="list-group list-group-flush">
                {todos.map((todo, i) => (
                    <li key={todo.id} className="list-group-item">
                        <p className="content-todo mr-5">
                            {i + 1}. {todo.desc}
                        </p>
                        <button className="btn btn-danger">Borrar</button>
                    </li>
                ))}
                </ul>
            </div>

            <div className="col-5">
              Agregar TODO
              <hr />

              <form onSubmit={handleSubmit}>
                  <input 
                    type="text"
                    name="description"
                    placeholder="Agregar tarea"
                    autoComplete="off"
                    value={description || ""}
                    onChange={handleInputChange}
                  />

                  <button 
                    type="submit"
                    className="btn"
                    >
                      Guardar
                  </button>
              </form>
            </div>

        </div>
      </div>
    );
}

