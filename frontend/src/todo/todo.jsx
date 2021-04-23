import React, { Component } from 'react'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

export default class Todo extends Component {
    constructor(props) {
        super(props)
        /* O método bind() cria uma nova função que, quando chamada, tem sua palavra-chave this definida com o valor fornecido, com uma sequência determinada de argumentos precedendo quaisquer outros que sejam fornecidos quando a nova função é chamada */
        this.handleAdd = this.handleAdd.bind(this)
    }
    handleAdd() {
        
    }

    render() {
        return (
            <div>
                 <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
                 <TodoForm handleAdd={this.handleAdd} />
                 <TodoList />
            </div>
        )
    }
}