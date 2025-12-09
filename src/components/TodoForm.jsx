import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
    const [text, setText] = useState('');
    const [category, setCategory] = useState(CATEGORIES[0].id);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text.trim()) return;

        addTodo({
            text: text.trim(),
            category,
            completed: false,
            id: Date.now(),
            createdAt: new Date().toISOString()
        });

        setText('');
    };

    return (
        <form onSubmit={handleSubmit} className="form-group">
            <input
                type="text"
                placeholder="What is the task today?"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />

            <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                style={{
                    backgroundColor: '#1e293b',
                    color: 'white',
                    border: '1px solid #475569',
                    padding: '0 1rem',
                    borderRadius: '0',
                    outline: 'none',
                    cursor: 'pointer'
                }}
            >
                {CATEGORIES.map(cat => (
                    <option key={cat.id} value={cat.id}>{cat.label}</option>
                ))}
            </select>

            <button type="submit" className="btn-add">
                Add Task
            </button>
        </form>
    );
};

export const CATEGORIES = [
    { id: 'work', label: 'Work', color: '#3b82f6' },
    { id: 'personal', label: 'Personal', color: '#8b5cf6' },
    { id: 'study', label: 'Study', color: '#f59e0b' },
    { id: 'shopping', label: 'Shopping', color: '#10b981' },
];

export default TodoForm;
