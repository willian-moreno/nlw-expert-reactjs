import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'

export function NewNoteCard() {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="flex flex-col rounded-md bg-slate-700 p-5 gap-3 text-left overflow-hidden relative outline-none hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400">
        <span className="text-sm font-medium text-slate-200">
          Adicionar nota
        </span>
        <p className="text-sm text-slate-400 leading-6">
          Grave uma nota em áudio que será convertida para texto automaticamente.
        </p>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="inset-0 fixed bg-black/50" />

        <Dialog.Content className="flex flex-col max-w-[640px] w-full h-[60vh] fixed left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-10 rounded-md bg-slate-700 outline-none overflow-hidden">
          <Dialog.Close className="absolute top-0 right-0 bg-slate-800 p-1.5 text-slate-400 hover:text-slate-100 transition-colors">
            <X className="size-5" />
          </Dialog.Close>

          <div className="flex flex-1 flex-col gap-5 p-5">
            <span className="text-sm font-medium text-slate-200">
              Adicionar nota
            </span>
            <p className="text-sm text-slate-400 leading-6">
              Comece <button className="text-lime-400 font-medium inline-block hover:underline">gravando uma nota</button> em áudio ou se preferir <button className="text-lime-400 font-medium inline-block hover:underline">utilize apenas texto</button>.
            </p>
          </div>

          <button className="w-full bg-lime-400 py-4 text-center text-sm text-lime-950 font-medium outline-none hover:bg-lime-500 transition-colors">
            Salvar nota
          </button>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}