import { ArrowRight } from "phosphor-react";
import { TitleBar } from "./components/TitleBar";
import { useEffect, useState } from "react";

export function App() {

  const [isOnline, setIsOnline] = useState(false)

  function checkIfHasInternetConnection() {
    fetch("https://one.one.one.one/").then(() => {
      setIsOnline(true)
    }
    ).catch(() => {
      setIsOnline(false)
    })
  }

  useEffect(() => {
    checkIfHasInternetConnection()
  }, [])

  return (
    <div className="">
      <TitleBar />
      <main className="p-4">
        <h1 className="font-mono text-5xl text-center py-6">FreshStart.</h1>
        <div className="gap-2 flex items-center mt-32 w-full justify-center">
          <button className="bg-white px-4 py-3 text-black font-mono rounded flex items-center gap-2 text-2xl hover:bg-white/70 transition-colors">
            Iniciar
            <ArrowRight size={24} weight="bold" />
          </button>
          {/* <button className="bg-white px-3 py-2 text-black font-mono rounded flex items-center gap-2">
            aaa
          </button> */}
        </div>
      </main>
      <footer className="absolute bottom-0 border-t border-white/20 w-full font-mono px-2 py-1 flex items-center justify-between">
        <span>v 0.1</span>
        <div>
          <span>{isOnline ? (<span>Online</span>) : (<span>Offline</span>)}</span>
        </div>
      </footer>
    </div>
  )
}
