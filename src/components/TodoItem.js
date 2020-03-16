import React from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends React.Component {
    getStyle = (status) => ({
        backGround: '#f4f4f4',
        padding: '10px',
        borderBottom: '1px #ccc dotted',
        textDecoration: status ? 'line-through' : 'none'
    });

    render() {
        const { id, title, completed } = this.props.todo;
        return (
            <div style={this.getStyle(completed)}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} />
                    {title}
                    <button onClick={this.props.deleteTodo.bind(this, id)} style={btnStyle}>x</button>
                </p>
            </div>
        )
    }
}

//PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}
 
const btnStyle = {
    backgroundColor: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 8px',
    borderRadius: '50%',
    marginLeft: '15px',
}

export default TodoItem;