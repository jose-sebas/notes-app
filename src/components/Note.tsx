import { useCallback } from "react";
import { NoteInterface } from "./Notes";

interface NoteProps {
    note: NoteInterface
    onDelete: (id:number) => void
}

export function Note(props: NoteProps) {
    
    const handleDelete = useCallback(() => {
        props.onDelete(props.note.id)
    }, [])
    return <div className="note">
        <div className="delete-note" onClick={handleDelete}>x</div>
        <p style={{overflow:'hidden'}}>{props.note.text}</p>
    </div>
}