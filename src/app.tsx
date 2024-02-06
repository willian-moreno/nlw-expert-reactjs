import logo from './assets/logo-nlw-expert.svg'

export function App() {
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
              placeholder="Busque em suas notas..."
              className="w-full bg-transparent text-3xl font-semibold tracking-tight placeholder:text-slate-500 focus:outline-none"
            />
          </form>

          <hr className="h-px bg-slate-700 border-0" />
        </div>
      </header>

      <main className="w-full">
        <div className="grid md:grid-cols-[repeat(auto-fill,minmax(348px,1fr))] grid-cols-1 grid-rows-[250px] gap-6 max-w-6xl mx-auto px-5">
          <div className="rounded-md bg-slate-700 p-5 space-y-3 overflow-hidden relative">
            <span className="text-sm font-medium text-slate-200">
              Adicionar nota
            </span>
            <p className="text-sm text-slate-400 leading-6">
              Grave uma nota em áudio que será convertida para texto automaticamente.
            </p>
          </div>

          <div className="rounded-md bg-slate-800 p-5 space-y-3 overflow-hidden relative">
            <span className="text-sm font-medium text-slate-200">
              há 2 dias
            </span>
            <p className="text-sm text-slate-400 leading-6">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime quas dolores perferendis blanditiis dignissimos fuga tempore eos sit similique totam voluptate doloremque ullam explicabo qui, beatae laborum sapiente praesentium dolor accusantium repellendus illum. Aut laudantium mollitia impedit. Officia ea amet, quasi commodi maiores quia sint, explicabo accusantium beatae similique autem quas quidem architecto.
            </p>
            <div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
          </div>
        </div>
      </main>
    </>
  )
}
