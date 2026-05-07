import {create} from 'zustand';
import {persist} from 'zustand/middleware';

export const useNoteStore = create(
    persist(
        (set)=>({

            notes: [],

            addNote: (title, content)=> set((state)=> ({notes: [...state.notes, {id: Date.now(), title, content, updatedAt: Date.now()}]})),

            updateNote: (id, title, content)=> set((state)=> ({notes: state.notes.map(note=> note.id===id? {...state.note, title, content, updatedAt: Date.now()} : note)})),

            deleteNote: (id)=> set((state)=> ({notes: state.notes.filter(note=> note.id!== id)})),
        }),

        {
            name: "notes-Storage"
        }
    )
)

