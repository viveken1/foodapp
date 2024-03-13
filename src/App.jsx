
import { Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './Pages/LandingPage'
import Home from './Pages/Home'
import History from './Pages/History'
import Header from './Components/Header'
import Footer from './Components/Footer'
import RecipePage from './Pages/RecipePage'

function App() {

  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/history' element={<History/>}/>
        <Route path='/recipe' element={<RecipePage/>}/>
      </Routes>
    <Footer/>
    </>
  )
}

export default App