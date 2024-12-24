import {Home, About, Login, Error} from "./pages"
import {Navbar} from "./components"
import './App.css'

function App() {
  

  return (
    <>
      <Navbar/>
      <Home/>
      <About />
      <Login/>
      <Error/>
    </>
  )
}

export default App
