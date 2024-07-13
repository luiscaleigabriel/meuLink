import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Links from "./pages/Links"

function App() {

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/links" element={ <Links />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
