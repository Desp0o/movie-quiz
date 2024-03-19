import { Routes, Route } from "react-router-dom"
import Main from "./pages/Main"
import Navbar from "./components/navbar/Navbar"
import Dashboard from "./pages/Dashboard"
import AllQuiz from "./pages/AllQuiz"
import Contact from "./pages/Contact"
import Login from "./pages/Login"
import TopBar from "./components/topBar/topBar"

function App() {

  return(
    <div className="app">
    <Navbar />
      <div className="app_inner">
        <TopBar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/pages/Dashboard" element={<Dashboard />} />
          <Route path="/pages/AllQuiz" element={<AllQuiz />} />
          <Route path="/pages/Contact" element={<Contact />} />
          <Route path="/pages/Contact" element={<Contact />} />
          <Route path="/pages/Login" element={<Login />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
