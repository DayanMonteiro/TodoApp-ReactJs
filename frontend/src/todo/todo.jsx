import React, { Component } from 'react'

/* Axios é uma biblioteca que nos ajuda a fazer solicitações de http para recursos externos. Em nossos aplicativos React, frequentemente precisamos recuperar dados de APIs externas para que possam ser exibidos em nossas páginas da web. ... Axios usa métodos como get () e post () que realizam solicitações http GET e POST para recuperar ou criar recursos. */
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = { description: '', list: [] }
        /* O método bind() cria uma nova função que, quando chamada, tem sua palavra-chave this definida com o valor fornecido, com uma sequência determinada de argumentos precedendo quaisquer outros que sejam fornecidos quando a nova função é chamada */
        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)

        this.handleRemove = this.handleRemove.bind(this)
        this.refresh()
    }

    handleRemove(todo) {
        axios.delete(`${URL}/${todo._id}`)
            .then(resp => this.refresh())
    }


    // metodo refresh ira pegar a lista mais atualizada e retornar de forma decrescente de forma que a ultima tarefa retorne primeiro na lista
    refresh() {
        axios.get(`${URL}?sort=-createdAt`)
        .then(resp => this.setState({...this.state, descrespition: '', list: resp.data}))
    }


    handleChange(e) {
        this.setState({...this.state, description: e.target.value})
    }

    handleAdd() {
        const description = this.state.description
        axios.post(URL, { description })
            .then(resp => this.refresh())
    }

    render() {
        return (
            <div>
                 <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
                 <TodoForm description={this.state.description}
                    handleChange={this.handleChange}
                    handleAdd={this.handleAdd} 
                />
                 <TodoList list={this.state.list}
                    handleRemove={this.handleRemove} 
                />
            </div>
        )
    }
}