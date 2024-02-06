interface NoteCardProps {
  note: {
    content: string,
    createdAt: Date,
  }
}

export function NoteCard({ note }: NoteCardProps) {
  return (
    <button className="flex flex-col rounded-md bg-slate-800 p-5 gap-3 text-left cursor-pointer overflow-hidden relative outline-none hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400">
      <span className="text-sm font-medium text-slate-200">
        {note.createdAt.toISOString()}
      </span>
      <p className="text-sm text-slate-400 leading-6">
        {note.content}
      </p>
      <div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
    </button>
  )
}