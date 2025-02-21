import { useCallback, useState } from "react"
import { useNotesContext } from "../hooks/useNotesContext";
import { Note } from "./Note";

export interface NoteInterface {
    id: number
    text: string
}

export function Notes() {
    const {notes, addItem, removeItem} = useNotesContext();
    const [note, setNote] = useState<string>("")

    const handleAddItem = useCallback(() => {
        addItem({
            id: notes.length,
            text: note
        })
    }, [note, notes])

    const handleNoteChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setNote(e?.target?.value ?? '')
    }, [])
    
    const handleDeleteNote = useCallback((id: number) => {
        removeItem(id)
    }, [])

    return <div className="flex content-center flex-column">
        <h5>Create a new note</h5>
        <div>
            <input value={note} onChange={handleNoteChange}/>
            <button disabled={!note.length} onClick={handleAddItem}>Create</button>
        </div>
        <div className="flex flex-wrap">  
            {notes.map((item: NoteInterface) => <Note key={item.id} note={item} onDelete={handleDeleteNote} />)}
        </div>
    </div>
}