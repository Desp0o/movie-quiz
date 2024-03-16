import { Routes, Route } from "react-router-dom"
import Main from "./pages/Main"
import Navbar from "./components/navbar/Navbar"
import Dashboard from "./pages/Dashboard"

function App() {

  return(
    <div className="app">
    <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/pages/Dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  )
}

export default App
