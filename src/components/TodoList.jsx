import React, { useState } from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, toggleComplete, deleteTodo, editTodo }) => {
    const [filter, setFilter] = useState('all'); // all, pending, completed

    const filteredTodos = todos.filter(todo => {
        if (filter === 'pending') return !todo.completed;
        if (filter === 'completed') return todo.completed;
        return true;
    });

    return (
        <div>
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', justifyContent: 'center' }}>
                <button
                    onClick={() => setFilter('all')}
                    style={{ color: filter === 'all' ? '#a855f7' : '#94a3b8', fontWeight: 'bold' }}
                >
                    All
                </button>
                <button
                    onClick={() => setFilter('pending')}
                    style={{ color: filter === 'pending' ? '#a855f7' : '#94a3b8', fontWeight: 'bold' }}
                >
                    Pending
                </button>
                <button
                    onClick={() => setFilter('completed')}
                    style={{ color: filter === 'completed' ? '#a855f7' : '#94a3b8', fontWeight: 'bold' }}
                >
                    Completed
                </button>
            </div>

            <div style={{ maxHeight: '60vh', overflowY: 'auto' }}>
                {filteredTodos.map((todo, index) => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        index={index}
                        toggleComplete={toggleComplete}
                        deleteTodo={deleteTodo}
                        editTodo={editTodo}
                    />
                ))}
            </div>

            <div className="pagination">
                <span className="page-badge">1</span>
            </div>
        </div>
    );
};

export default TodoList;
