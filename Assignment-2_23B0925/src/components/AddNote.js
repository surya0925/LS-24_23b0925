import { useState } from 'react';

const AddNote = ({ handleAddNote }) => {
    const [noteTitle, setNoteTitle] = useState('');
    const [noteText, setNoteText] = useState('');
    const titleCharacterLimit = 50;
    const textCharacterLimit = 200;

    const handleTitleChange = (event) => {
        if (titleCharacterLimit - event.target.value.length >= 0) {
            setNoteTitle(event.target.value);
        }
    };

    const handleTextChange = (event) => {
        if (textCharacterLimit - event.target.value.length >= 0) {
            setNoteText(event.target.value);
        }
    };

    const handleSaveClick = () => {
        if (noteTitle.trim().length > 0 && noteText.trim().length > 0) {
            handleAddNote(noteTitle, noteText);
            setNoteTitle('');
            setNoteText('');
        }
    };

    return (
        <div className='note new'>
            <textarea
                rows='2'
                cols='10'
                placeholder='Add a Highlight...'
                value={noteTitle}
                onChange={handleTitleChange}
                className='note-title-edit'
            ></textarea>
            <textarea
                rows='8'
                cols='10'
                placeholder='Details...'
                value={noteText}
                onChange={handleTextChange}
                className='note-text-edit'
            ></textarea>
            <div className='note-footer'>
                <small>
                    {textCharacterLimit - noteText.length} Characters Remaining
                </small>
				<button className='btn btn-primary btn-success save' onClick={handleSaveClick}>
    Save
</button>


            </div>
        </div>
    );
};

export default AddNote;
