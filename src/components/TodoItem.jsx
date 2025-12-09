import React, { useState } from 'react';
import { Pencil, Trash2, Check, X, Save, Undo } from 'lucide-react';
import { CATEGORIES } from './TodoForm';

const TodoItem = ({ todo, toggleComplete, deleteTodo, editTodo }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(todo.text);
    const [editCategory, setEditCategory] = useState(todo.category);

    // Fallback if category ID changed or removed
    const categoryConfig = CATEGORIES.find(c => c.id === todo.category) || CATEGORIES[0];

    const handleSave = () => {
        if (editText.trim()) {
            editTodo(todo.id, editText.trim(), editCategory);
            setIsEditing(false);
        }
    };

    if (isEditing) {
        return (
            <div className="todo-item-purple" style={{ display: 'block' }}>
                <div style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
                    <input
                        type="text"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        style={{ borderBottom: '1px solid white', flex: 1 }}
                        autoFocus
                    />
                    <select
                        value={editCategory}
                        onChange={(e) => setEditCategory(e.target.value)}
                        style={{
                            background: '#334155',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px'
                        }}
                    >
                        {CATEGORIES.map(cat => (
                            <option key={cat.id} value={cat.id}>{cat.label}</option>
                        ))}
                    </select>
                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
                    <button onClick={handleSave} className="icon-btn" title="Save">
                        <Save size={20} />
                    </button>
                    <button onClick={() => setIsEditing(false)} className="icon-btn" title="Cancel">
                        <X size={20} />
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="todo-item-purple" style={{
            opacity: todo.completed ? 0.7 : 1,
            position: 'relative',
            paddingRight: '6rem' // Space for buttons
        }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <span className="todo-text" style={{
                    textDecoration: todo.completed ? 'line-through' : 'none'
                }}>
                    {todo.text}
                </span>
                <span style={{
                    fontSize: '0.75rem',
                    opacity: 0.8,
                    display: 'inline-block',
                    padding: '2px 8px',
                    background: 'rgba(255,255,255,0.2)',
                    borderRadius: '12px',
                    width: 'fit-content'
                }}>
                    {categoryConfig.label}
                </span>
            </div>

            <div className="actions" style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)' }}>
                <button
                    onClick={() => toggleComplete(todo.id)}
                    className="icon-btn"
                    title={todo.completed ? "Mark Pending" : "Mark Complete"}
                >
                    {todo.completed ? <Undo size={20} /> : <Check size={20} />}
                </button>

                <button
                    onClick={() => setIsEditing(true)}
                    className="icon-btn"
                    title="Edit"
                >
                    <Pencil size={20} />
                </button>

                <button
                    onClick={() => deleteTodo(todo.id)}
                    className="icon-btn"
                    title="Delete"
                >
                    <Trash2 size={20} />
                </button>
            </div>
        </div>
    );
};

export default TodoItem;
