import React from "react";
import PropTypes from "prop-types";
import {FaPlus} from 'react-icons/fa';
import "./Form.css";

export default function Form({handleFormSubmit, handleInputChange, novaTarefa}) {
    return (
        <form onSubmit={handleFormSubmit} action="#" className="formulario">
            <input value={novaTarefa} onChange={handleInputChange} type="text"/>
            <button type="submit"><FaPlus/></button>
        </form>
    )
}

Form.propTypes = {
    handleInputChange: PropTypes.func.isRequired,
    handleFormSubmit: PropTypes.func.isRequired,
    novaTarefa: PropTypes.string.isRequired,
}