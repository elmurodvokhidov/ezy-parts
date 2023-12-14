import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home/Home"
import Navbar from "./navbar/Navbar"
import Footer from "./footer/Footer"
import Page3 from "./Pages/page3/Page3"

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App