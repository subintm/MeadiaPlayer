import './App.css'

import Header from './Components/Header'
import Footer from './Components/Footer'
import  Landingpage from './Page/Landingpage'
import { Routes,Route } from 'react-router-dom'
import Hom from'./Page/Hom';
import WatchHistory from"./Page/WatchHistory";


function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Landingpage/>}/>
      <Route path='/home' element={<Hom/>}/>
      <Route path='/history' element={<WatchHistory/>}/>
     
    </Routes>
     <Footer/>
   </>
  )
}

export default App
