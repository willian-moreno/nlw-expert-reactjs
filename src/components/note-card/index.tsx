import * as Dialog from '@radix-ui/react-dialog'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { X } from 'lucide-react'

interface NoteCardProps {
  note: {
    content: string,
    createdAt: Date,
  }
}

export function NoteCard({ note }: NoteCardProps) {
  const createdAtFormated = formatDistanceToNow(note.createdAt, {
    addSuffix: true,
    locale: ptBR,
  })

  return (
    <Dialog.Root>
      <Dialog.Trigger className="flex flex-col rounded-md bg-slate-800 p-5 gap-3 text-left cursor-pointer overflow-hidden relative outline-none hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400">
        <span className="text-sm font-medium text-slate-200">
          {createdAtFormated}
        </span>

        <p className="text-sm text-slate-400 leading-6">
          {note.content}
        </p>
        <div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="inset-0 fixed bg-black/50" />

        <Dialog.Content className="flex flex-col max-w-[calc(100vw-2.5rem)] w-[640px] h-[60vh] fixed left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-10 rounded-md bg-slate-700 outline-none overflow-hidden">
          <Dialog.Close className="absolute top-0 right-0 bg-slate-800 p-1.5 text-slate-400 hover:text-slate-100 transition-colors">
            <X className="size-5" />
          </Dialog.Close>

          <div className="flex flex-1 flex-col gap-5 p-5 overflow-auto">
            <span className="text-sm font-medium text-slate-200">
              {createdAtFormated}
            </span>

            <p className="text-sm text-slate-400 leading-6">
              {note.content}
            </p>
          </div>

          <button className="w-full bg-slate-800 py-4 text-center text-sm text-slate-300 font-medium outline-none group">
            Deseja <span className="text-red-400 group-hover:underline">apagar essa nota</span>?
          </button>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}