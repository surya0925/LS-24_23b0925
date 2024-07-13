import { useState } from 'react';
import { MdDeleteForever, MdEdit, MdSave } from 'react-icons/md'; // Import MdSave,delete,edit icon

const Note = ({ id, title, text, date, handleDeleteNote, handleEditNote }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newTitle, setNewTitle] = useState(title);
    const [newText, setNewText] = useState(text);

    const handleSave = () => {
        handleEditNote(id, newTitle, newText);
        setIsEditing(false);
    };

    return (
        <div className='note'>
            {isEditing ? (
                <>
                    <input
                        type='text'
                        value={newTitle}
                        onChange={(e) => setNewTitle(e.target.value)}
                        className='note-title-edit form-control'
                    />
                    <textarea
                        value={newText}
                        onChange={(e) => setNewText(e.target.value)}
                        className='note-text-edit form-control'
                    />
                    <button onClick={handleSave} className='btn btn-success save'>
                        <MdSave className='save-icon' size='1.3em' /> Save
                    </button>
                </>
            ) : (
                <>
                    <h2>{title}</h2>
                    <p>{text}</p>
                    <div className='note-footer'>
                        <small>{date}</small>
                        <div>
                            <button onClick={() => setIsEditing(true)} className='btn btn-info edit-button'>
                                <MdEdit className='edit-icon' size='1.3em' /> Edit
                            </button>
                            <button onClick={() => handleDeleteNote(id)} className='btn btn-danger delete-button'>
                                <MdDeleteForever className='delete-icon' size='1.3em' />
                            </button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Note;
