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
    </>
  )
}
