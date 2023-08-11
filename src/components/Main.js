import React, {Component} from "react";
// Form
import {FaPlus} from 'react-icons/fa';

import "./Main.css";

export default class Main extends Component {
    state = {
        novaTarefa: "",
    };

    handleInputChange = (event) => {
        this.setState({
            novaTarefa: event.target.value,
        });
    }

    render() {
        const {novaTarefa} = this.state;
        return (
            <div className="main">
                <h1>Lista de Tarefas</h1>
                <form action="#" className="formulario">
                    <input value={novaTarefa} onChange={this.handleInputChange} type="text"/>
                    <button type="submit"><FaPlus/></button>
                </form>
            </div>
        );
    }
}