import * as Dialog from '@radix-ui/react-dialog'
import { ArrowUpRight, X } from 'lucide-react'
import { ChangeEvent, FormEvent, useState } from 'react'
import { toast } from 'sonner'

interface NewNoteCardProps {
  onNoteCreated: (content: string) => void
}

export function NewNoteCard({ onNoteCreated }: NewNoteCardProps) {
  const [shouldShowOnboarding, setShouldShowOnboarding] = useState(true)
  const [content, setContent] = useState('')

  const isTheSubmitButtonDisabled = shouldShowOnboarding || !content.length

  function handleStartEditor() {
    setShouldShowOnboarding(false)
  }

  function handleContentChanged(event: ChangeEvent<HTMLTextAreaElement>) {
    const { value } = event.target

    setContent(value)

    if (!value || value.length === 0) {
      setShouldShowOnboarding(true)
    }
  }

  function handleSaveNote(event: FormEvent) {
    event.preventDefault()

    if (!content) {
      toast.error('O conteúdo da nota não pode estar vazio.')
      return
    }

    onNoteCreated(content)
    setShouldShowOnboarding(true)
    setContent('')

    toast.success('Nota criada com sucesso.')
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger className="flex flex-col rounded-md bg-slate-700 p-5 gap-3 text-left cursor-pointer overflow-hidden relative outline-none hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400 transition-[box-shadow] group">
        <div className="absolute top-0 right-0 bg-slate-800 p-1.5 text-slate-400 group-hover:text-slate-100 transition-colors">
          <ArrowUpRight className="size-5" />
        </div>

        <span className="text-sm font-medium text-slate-200">
          Adicionar nota
        </span>

        <p className="text-sm text-slate-400 leading-6">
          Grave uma nota em áudio que será convertida para texto automaticamente.
        </p>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="inset-0 fixed bg-black/50" />

        <Dialog.Content className="flex flex-col max-w-[calc(100vw-2.5rem)] w-[640px] h-[60vh] fixed left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-10 rounded-md bg-slate-700 outline-none overflow-hidden">
          <Dialog.Close className="absolute top-0 right-0 bg-slate-800 p-1.5 text-slate-400 hover:text-slate-100 focus-visible:outline-2 focus-visible:outline-lime-400 focus-visible:outline-offset-4 transition-colors">
            <X className="size-5" />
          </Dialog.Close>

          <div className="flex flex-1 flex-col gap-5 p-5">
            <span className="text-sm font-medium text-slate-200">
              Adicionar nota
            </span>

            {shouldShowOnboarding ? (
              <p className="text-sm text-slate-400 leading-6 overflow-auto">
                Comece <button className="text-lime-400 font-medium inline-block hover:underline focus-visible:outline-2 focus-visible:outline-lime-400">gravando uma nota</button> em áudio ou se preferir <button className="text-lime-400 font-medium inline-block hover:underline focus-visible:outline-2 focus-visible:outline-lime-400" onClick={handleStartEditor}>utilize apenas texto</button>.
              </p>
            ) : (
              <form
                id="newNoteForm"
                onSubmit={handleSaveNote}
                className="flex flex-1"
              >
                <textarea
                  id="noteContent"
                  name="noteContent"
                  autoFocus={true}
                  className="text-sm text-slate-400 leading-6 bg-transparent resize-none flex-1 outline-none"
                  value={content}
                  onChange={handleContentChanged}
                />
              </form>
            )}
          </div>

          <button
            type="submit"
            form="newNoteForm"
            className="w-full bg-lime-400 py-4 text-center text-sm text-lime-950 font-medium enabled:hover:bg-lime-500 enabled:focus-visible:outline-2 enabled:focus-visible:outline-lime-400 enabled:focus-visible:outline-offset-4 disabled:bg-opacity-70 disabled:cursor-not-allowed transition-colors"
            disabled={isTheSubmitButtonDisabled}
          >
            Salvar nota
          </button>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}