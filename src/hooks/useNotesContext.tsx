import { createContext, useContext } from "react";
import { NoteInterface } from "../components/Notes";

interface NotesContextType {
    notes: NoteInterface[];
    addItem: (item: NoteInterface) => void;
    removeItem: (id: number) => void;
  }
  
export const NotesContext = createContext<NotesContextType | undefined>(undefined);
  
export const useNotesContext = (): NotesContextType => {
    const context = useContext(NotesContext);
    if (!context) {
      throw new Error("useMyContext must be used within a MyProvider");
    }
    return context;
  };
  