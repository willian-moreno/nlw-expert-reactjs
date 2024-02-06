export function NewNoteCard() {
  return (
    <div className="flex flex-col rounded-md bg-slate-700 p-5 space-y-3 text-left overflow-hidden relative">
      <span className="text-sm font-medium text-slate-200">
        Adicionar nota
      </span>
      <p className="text-sm text-slate-400 leading-6">
        Grave uma nota em áudio que será convertida para texto automaticamente.
      </p>
    </div>
  )
}