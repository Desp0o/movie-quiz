import { Routes, Route } from "react-router-dom"
import Main from "./pages/Main"
import Navbar from "./components/navbar/Navbar"

function App() {

  return(
    <div className="app">
    <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  )
}

export default App
