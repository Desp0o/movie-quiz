import { Routes, Route } from "react-router-dom"
import Main from "./pages/Main"
import Navbar from "./components/navbar/Navbar"
import Dashboard from "./pages/Dashboard"
import AllQuiz from "./pages/AllQuiz"
import Contact from "./pages/Contact"

function App() {

  return(
    <div className="app">
    <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/pages/Dashboard" element={<Dashboard />} />
        <Route path="/pages/AllQuiz" element={<AllQuiz />} />
        <Route path="/pages/Contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
