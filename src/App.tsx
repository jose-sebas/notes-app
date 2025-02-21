import { useState } from 'react'
import {Notes, NoteInterface} from './components/Notes'
import { NotesContext } from './hooks/useNotesContext';

export function App() {
  const [notes, setNotes] = useState<NoteInterface[]>([])

  const addItem = (item: NoteInterface) => {
    setNotes((prevItems) => [...prevItems, item]);
  };

  const removeItem = (id: number) => {
    setNotes((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <>
      <NotesContext.Provider value={{ notes, addItem, removeItem }}>
        <Notes/>
      </NotesContext.Provider>
    </>
  )
}

