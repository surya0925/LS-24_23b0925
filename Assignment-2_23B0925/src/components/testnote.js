import { useState } from 'react';
import { MdDeleteForever } from 'react-icons/md';

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
						className='note-title-edit'
					/>
					<textarea
						value={newText}
						onChange={(e) => setNewText(e.target.value)}
						className='note-text-edit'
					/>
					<button onClick={handleSave} className='save'>Save</button>
				</>
			) : (
				<>
					<h2>{title}</h2>
					<p>{text}</p>
					<div className='note-footer'>
						<small>{date}</small>
						<div>
							<button onClick={() => setIsEditing(true)} className='edit-button'>Edit</button>
							<MdDeleteForever
								onClick={() => handleDeleteNote(id)}
								className='delete-icon'
								size='1.3em'
							/>
						</div>
					</div>
				</>
			)}
		</div>
	);
};

export default Note;
