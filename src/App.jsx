import { Route, Routes} from 'react-router-dom'
import './App.css'

// import Pages
import Main from './pages/Main'
import Contact from './pages/Contact'
import About from './pages/About'
import Welcome from './pages/Welcome'
import SignUp from './pages/SignUp'

//import Components
import NavBar from './components/Navbar'

function App() {
  return (
    // add routes to link the page path and the elements from pages folder
    <>
    <NavBar />
      <Routes>
        <Route path={'/'} element={ <Main />} /> 
        <Route path={'/about'} element={ <About />} /> 
        <Route path={'/contact'} element={ <Contact />} /> 
        <Route path={'/welcome/:firstname/:lastname'} element={ <Welcome />} />
        <Route path={'/signup'} element={ <SignUp />} />
      </Routes>
    </>
  )
}

export default App
