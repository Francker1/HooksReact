import { useEffect, useRef, useState } from "react"

export const useFetch = ( url ) => {
    
    //con el useRef prevenimos el error cuando el componente no está montado y evitamos que se haga el setState, ya que esto ocasiona posibles errores al generar un estado en un componente que no está montado. Con esto le decimos, que si está montado, por referencia, el componente, setee el estado, si no, no.
    const isMounted = useRef(true);
    
    const [state, setState] = useState({
        data: null,
        loading: true,
        error: null,
    });

    useEffect(() => {

        return () => {

            isMounted.current = false;
        }
    }, [])

    useEffect(() => {

        setState({ data: null, loading: true, error: null });

        fetch(url)
            .then( resp => resp.json() )
            .then( data => {


                if (isMounted.current) {
                    setState({
                    loading: false,
                    error: null,
                    data,
                    });
                }
            });

    }, [url]);

    return state;
}
