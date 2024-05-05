import { Minus, X } from "phosphor-react";
import { ipcRenderer } from "electron"

export function TitleBar() {

  function handleCloseWindow() {
    console.log("dale")
    ipcRenderer.send("close")
  }

  function handleMinimizeWindow() {
    ipcRenderer.send("minimize")
  }

  return (
    <header style={{ "-webkit-app-region": "drag", "-webkit-app-user-select": 'none' } as React.CSSProperties} className="border-b border-white/20 relative">
      <nav className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="" alt="" />
          <h1 className="font-mono ml-1">FreshStart | v0.1</h1>
        </div>
        <div className="flex items-center relative z-100">
          <button style={{ "-webkit-app-region": "no-drag", } as React.CSSProperties} onClick={() => handleMinimizeWindow()} className="py-2 px-2 hover:bg-white/20 transition-all">
            <Minus className="text-white" weight="bold" size={24} />
          </button>
          <button style={{ "-webkit-app-region": "no-drag", } as React.CSSProperties} onClick={() => handleCloseWindow()} className="py-2 px-2 hover:bg-red-800 transition-all">
            <X className="text-white" weight="bold" size={24} />
          </button>
        </div>
      </nav>
    </header>
  )
}