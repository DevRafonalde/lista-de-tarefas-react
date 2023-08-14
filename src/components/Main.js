import React, {Component} from "react";
// Form
import {FaPlus} from 'react-icons/fa';
// Tarefas
import {FaEdit, FaWindowClose} from 'react-icons/fa';

import "./Main.css";

export default class Main extends Component {
    state = {
        novaTarefa: "",
        tarefas: [],
        index: -1,
    };

    handleInputChange = (event) => {
        this.setState({
            novaTarefa: event.target.value,
        });
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        const {tarefas, index} = this.state;
        let {novaTarefa} = this.state;
        novaTarefa = novaTarefa.trim();

        if(tarefas.indexOf(novaTarefa) !== -1) return;

        const novasTarefas = [...tarefas];

        if(index === -1) {
            this.setState({
                tarefas: [...novasTarefas, novaTarefa],
                novaTarefa: "",
            });
        } else {
            novasTarefas[index] = novaTarefa;

            this.setState({
                tarefas: [...novasTarefas],
                index: -1,
                novaTarefa: "",
            })
        }
    }

    handleDelete = (event, index) => {
        const {tarefas} = this.state;
        const novasTarefas = [...tarefas];
        novasTarefas.splice(index, 1);

        this.setState({
            tarefas: [...novasTarefas],
        })
    }

    handleEdit = (event, index) => {
        const {tarefas} = this.state;
        this.setState({
            index,
            novaTarefa: tarefas[index],
        })
    }

    render() {
        const {novaTarefa, tarefas} = this.state;
        return (
            <div className="main">
                <h1>Lista de Tarefas</h1>
                <form onSubmit={this.handleFormSubmit} action="#" className="formulario">
                    <input value={novaTarefa} onChange={this.handleInputChange} type="text"/>
                    <button type="submit"><FaPlus/></button>
                </form>
                <ul className="tarefas">
                    {tarefas.map((tarefa, index) => (
                        <li key={tarefa}>
                            {tarefa}
                            <span>
                                <FaEdit onClick={(event) => this.handleEdit(event, index)} className="edit"/>
                                <FaWindowClose onClick={(event) => this.handleDelete(event, index)} className="delete"/>
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}