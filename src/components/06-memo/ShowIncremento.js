import React from 'react'
import PropTypes from 'prop-types';

export const ShowIncremento = React.memo(({ incremento }) => {

    console.log("me volví a generar :(")

    return (
      <button
        className="btn bg-blue-600 text-white | hover:bg-blue-900"
        onClick={() => {
          incremento(5);
        }}
      >
        Incrementar
      </button>
    );
})

ShowIncremento.propTypes = {

    incremento: PropTypes.func.isRequired,
}

