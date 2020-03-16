import React from 'react';
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import * as uuid from 'uuid';

class App extends React.Component {
    state = {
        todos: [
            {
                id: uuid.v4(),
                title: 'take out trash',
                completed: false
            },
            {
                id: uuid.v4(),
                title: 'cut hair',
                completed: false
            },
            {
                id: uuid.v4(),
                title: 'make playlist',
                completed: false
            }
        ]
    };

    // toggle todo status
    markComplete = (id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        });
    }

    // remove todo item
    deleteTodo = (id) => {
        this.setState({
            todos: [...this.state.todos.filter(todo => todo.id !== id)]
        });
    }

    // add todo item
    addTodo = (title) => {
        const newTodo = {
            id: uuid.v4(),
            title,
            completed: false,
        };
        this.setState({
            todos: [...this.state.todos, newTodo]
        });
    }

    render() {
        return (
            <div className="App">
                <div >
                    <Header />
                    <AddTodo addTodo={this.addTodo} />
                    <h1>App</h1>
                    <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} markComplete={this.markComplete} />
                </div>
            </div>
        );
    }
}

export default App;
