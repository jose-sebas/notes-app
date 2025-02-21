import { useCallback, useMemo, useState } from "react";
import { useNotesContext } from "../hooks/useNotesContext"
import { Note } from "./Note";
import { NoteInterface } from "./Notes";
import { Pager } from "./Pager";

const itemsPerPage = 5

export function NotesList() {
    const {notes, removeItem} = useNotesContext();
    const [currentPage, setCurrentPage] = useState(0)

    const handleDeleteNote = useCallback((id: number) => {
        removeItem(id)
    }, [])

    const currentItems = useMemo(() => {
        return notes.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
    }, [currentPage, notes])


    const handlePageChange = useCallback((page: number) => {
        setCurrentPage(page)
    }, [])

    return <div>
        <div className="flex flex-wrap">  
            {currentItems.map((item: NoteInterface) => <Note key={item.id} note={item} onDelete={handleDeleteNote} />)}
        </div>
        <Pager items={notes.length} pageSize={itemsPerPage} onPageChange={handlePageChange} currentPage={currentPage}/>
    </div>
}