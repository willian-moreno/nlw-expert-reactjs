export function NoteCard() {
  return (
    <button className="flex flex-col rounded-md bg-slate-800 p-5 space-y-3 text-left cursor-pointer overflow-hidden relative outline-none hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400">
      <span className="text-sm font-medium text-slate-200">
        há 2 dias
      </span>
      <p className="text-sm text-slate-400 leading-6">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime quas dolores perferendis blanditiis dignissimos fuga tempore eos sit similique totam voluptate doloremque ullam explicabo qui, beatae laborum sapiente praesentium dolor accusantium repellendus illum. Aut laudantium mollitia impedit. Officia ea amet, quasi commodi maiores quia sint, explicabo accusantium beatae similique autem quas quidem architecto.
      </p>
      <div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
    </button>
  )
}