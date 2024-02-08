import * as Dialog from '@radix-ui/react-dialog'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { X } from 'lucide-react'

interface NoteCardProps {
  note: {
    id: string,
    content: string,
    createdAt: Date,
  }
}

export function NoteCard({ note }: NoteCardProps) {
  const createdAtFormated = formatDistanceToNow(note.createdAt, {
    addSuffix: true,
    locale: ptBR,
  })

  const contentRows = note.content.split('\n')

  return (
    <Dialog.Root>
      <Dialog.Trigger className="flex flex-col rounded-md bg-slate-800 p-5 gap-3 text-left cursor-pointer overflow-hidden relative outline-none hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400 transition-[box-shadow]">
        <span className="text-sm font-medium text-slate-200">
          {createdAtFormated}
        </span>

        <div className="flex flex-1 flex-col">
          {contentRows.map(contentRow => {
            return (
              <p
                key={contentRow}
                className="text-sm text-slate-400 leading-6"
              >
                {contentRow}
              </p>
            )
          })}
        </div>

        <div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="inset-0 fixed bg-black/50" />

        <Dialog.Content className="flex flex-col max-w-[calc(100vw-2.5rem)] w-[640px] h-[60vh] fixed left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-10 rounded-md bg-slate-700 outline-none overflow-hidden">
          <Dialog.Close className="absolute top-0 right-0 bg-slate-800 p-1.5 text-slate-400 hover:text-slate-100 focus-visible:outline-2 focus-visible:outline-lime-400 focus-visible:outline-offset-4 transition-colors">
            <X className="size-5" />
          </Dialog.Close>

          <div className="flex flex-1 flex-col gap-5 p-5 overflow-auto">
            <span className="text-sm font-medium text-slate-200">
              {createdAtFormated}
            </span>

            <div className="flex flex-col overflow-auto">
              {contentRows.map(contentRow => {
                return (
                  <p
                    key={contentRow}
                    className="text-sm text-slate-400 leading-6"
                  >
                    {contentRow}
                  </p>
                )
              })}
            </div>
          </div>

          <button className="w-full bg-slate-800 py-4 text-center text-sm text-slate-300 font-medium enabled:hover:text-slate-100 enabled:focus-visible:outline-2 enabled:focus-visible:outline-lime-400 enabled:focus-visible:outline-offset-4 disabled:bg-opacity-70 disabled:cursor-not-allowed transition-colors group">
            Deseja <span className="text-red-400 group-hover:underline">apagar essa nota</span>?
          </button>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}