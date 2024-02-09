import { ChangeEvent, useState } from 'react'
import logo from './assets/logo-nlw-expert.svg'
import { NewNoteCard } from './components/new-note-card'
import { NoteCard } from './components/note-card'

interface Note {
  id: string,
  content: string,
  createdAt: Date
}

export function App() {
  const [search, setSearch] = useState('')
  const [notes, setNotes] = useState<Note[]>(() => {
    const notesOnStorage = localStorage.getItem('@expert-notes:notes-1.0.0')

    if (notesOnStorage) {
      return JSON.parse(notesOnStorage)
    }

    return []
  })

  const filteredNotes = filterNotes()

  function filterNotes() {
    if (!search.length) return notes

    return notes.filter(note => {
      return note.content.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    })
  }

  function onNoteCreated(content: string) {
    const newNote: Note = {
      id: crypto.randomUUID(),
      content: content,
      createdAt: new Date()
    }

    const newNotesList = [newNote, ...notes]

    setNotes(newNotesList)

    localStorage.setItem('@expert-notes:notes-1.0.0', JSON.stringify(newNotesList))
  }

  function onNoteRemoved(id: string) {
    const notesWithoutNoteToBeRemoved = notes.filter(note => note.id !== id)

    setNotes(notesWithoutNoteToBeRemoved)

    localStorage.setItem('@expert-notes:notes-1.0.0', JSON.stringify(notesWithoutNoteToBeRemoved))
  }

  function onUndoNoteRemoval(lastNoteRemoved: Note) {
    lastNoteRemoved.id = crypto.randomUUID()
    setNotes((state) => [lastNoteRemoved, ...state])
    localStorage.setItem('@expert-notes:notes-1.0.0', JSON.stringify(notes))
  }

  function handleSearchNote(event: ChangeEvent<HTMLInputElement>) {
    const query = event.target.value || ''

    setSearch(query)
  }

  return (
    <>
      <header className="w-full">
        <div className="max-w-6xl mx-auto px-5 my-12 space-y-6">
          <img
            src={logo}
            alt=""
          />

          <form className="w-full">
            <input
              type="text"
              id="query"
              name="query"
              value={search}
              placeholder="Busque em suas notas..."
              className="w-full bg-transparent text-2xl md:text-3xl font-semibold tracking-tight placeholder:text-slate-500 focus:outline-none"
              onChange={handleSearchNote}
            />
          </form>

          <hr className="h-px bg-slate-700 border-0" />
        </div>
      </header>

      <main className="w-full">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 auto-rows-[250px] gap-6 max-w-6xl mx-auto px-5 mb-12">
          <NewNoteCard onNoteCreated={onNoteCreated} />

          {filteredNotes.map(note => {
            return (
              <NoteCard
                key={note.id}
                note={note}
                onNoteRemoved={onNoteRemoved}
                onUndoNoteRemoval={onUndoNoteRemoval}
              />
            )
          })}
        </div>
      </main>
    </>
  )
}
