import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Toaster } from './components/ui/sonner.tsx'
import './index.css'
import Cpu from './routes/Cpu.tsx'
import Home from './routes/Home.tsx'
import Multiplayer from './routes/Multiplayer.tsx'
import Play from './routes/Play.tsx'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/play" element={<Play />} />
          <Route path="multiplayer" element={<Multiplayer />} />
          <Route path="cpu" element={<Cpu />} />
        </Routes>
        <Toaster richColors toastOptions={{}}/>
      </BrowserRouter>
    </div>
  </StrictMode>,
)
