import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useNotes = create(
    persist(
        (set) => ({
            notes: [],

            addNote: (title, content) => set((state) => ({
                notes: [...state.notes, { id: Date.now(), title, content, updatedAt: Date.now(), pinned: false }]
            })),

            updateNote: (id, title, content) => set((state) => ({
                notes: state.notes.map(note => note.id === id ? { ...note, title, content, updatedAt: Date.now(), pinned:false } : note)
            })),

            deleteNote: (id) => set((state) => ({
                notes: state.notes.filter(note => note.id !== id)
            })),

            togglePin: (id) =>
                set((state) => ({
                    notes: state.notes.map((note) =>
                        note.id === id
                            ? { ...note, pinned: !note.pinned }
                            : note
                    )
                })),

        
        }),

        {
            name: 'notes2-storage'
        }
    )
)