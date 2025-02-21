import { useCallback, useState } from "react"
import { useNotesContext } from "../hooks/useNotesContext";
import { NotesList } from "./NotesList";

export interface NoteInterface {
    id: number
    text: string
}

export function Notes() {
    const {notes, addItem} = useNotesContext();
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

    return <div className="flex content-center flex-column">
        <h5>Create a new note</h5>
        <div>
            <input value={note} onChange={handleNoteChange}/>
            <button disabled={!note.length} onClick={handleAddItem}>Create</button>
        </div>
        <NotesList/>
    </div>
}