import React, {Component} from "react";
import Form from "./Form";
import Tarefas from "./Tarefas";

import "./Main.css";

export default class Main extends Component {
    state = {
        novaTarefa: "",
        tarefas: [],
        index: -1,
    };

    componentDidMount() {
        const tarefas = JSON.parse(localStorage.getItem('tarefas'));

        if (!tarefas) {
            return;
        }

        this.setState({tarefas});
    }

    componentDidUpdate(prevProps, prevState) {
        const {tarefas} = this.state;

        if (tarefas === prevState.tarefas) {
            return;
        }

        localStorage.setItem('tarefas', JSON.stringify(tarefas));
    }

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

        if(tarefas.indexOf(novaTarefa) !== -1) {
            return;
        }

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
                <Form
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                    novaTarefa={novaTarefa}/>
                <Tarefas
                    tarefas={tarefas}
                    handleEdit={this.handleEdit}
                    handleDelete={this.handleDelete}/>
            </div>
        );
    }
}