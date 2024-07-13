import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';
import Header from './components/Header';
import lightModeIcon from './components/night.png';
import darkModeIcon from './components/day.png'; 

const App = () => {
    const [notes, setNotes] = useState([
        { 
            id: nanoid(),
            title: 'Sample Note',
            text: 'Save Time by Notes',
            date: '13/06/2024',
        },
    ]);

    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'));

        if (savedNotes) {
            setNotes(savedNotes);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('react-notes-app-data', JSON.stringify(notes));
    }, [notes]);

    const addNote = (title, text) => {
        const date = new Date();
        const newNote = {
            id: nanoid(),
            title: title,
            text: text,
            date: date.toLocaleDateString(),
        };
        const newNotes = [newNote, ...notes];
        setNotes(newNotes);
    };

    const deleteNote = (id) => {
        const newNotes = notes.filter((note) => note.id !== id);
        setNotes(newNotes);
    };

    const editNote = (id, newTitle, newText) => {
		const index = notes.findIndex((note) => note.id === id);
		if (index === -1) return; 

		const newNotes = [...notes];
		const editedNote = newNotes.splice(index, 1)[0];
		editedNote.title = newTitle;
		editedNote.text = newText;
		newNotes.unshift(editedNote);
		setNotes(newNotes);
	};
	
	
    const handleToggleDarkMode = () => {
        setDarkMode((prevDarkMode) => !prevDarkMode);
    };

    return (
        <div className={`${darkMode && 'dark-mode'}`}>
            <div className='container'>
                <Header
                    handleToggleDarkMode={handleToggleDarkMode}
                    icon={darkMode ? lightModeIcon : darkModeIcon}
                />
                <NotesList
                    notes={notes}
                    handleAddNote={addNote}
                    handleDeleteNote={deleteNote}
                    handleEditNote={editNote}
                />
            </div>
        </div>
    );
};

export default App;
