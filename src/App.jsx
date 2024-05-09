import { Route, Routes } from 'react-router-dom'
import './App.css'
import Landingpage from './pages/Landingpage'
import Order from './pages/Order'
import Footer from './components/Footer'
import DiningOut from './pages/DiningOut'
import Nightlife from './pages/Nightlife'
import Header from './components/Header'
import Getapp from './components/Getapp'
import InvestorRelation from './components/InvestorRelation'



function App() {
  

  return (
    <>
     {/* <Header/> */}
      <Routes>
       
          <Route path='/' element={<Landingpage/>}  />
          <Route path='/order' element={<Order/>} />
          <Route path='/diningout' element={<DiningOut/>} />
          <Route path='/nightlife' element={<Nightlife/>} />
          <Route path='/getapp' element={<Getapp/>} />
          <Route path='/investor' element={<InvestorRelation/>} />
       
      </Routes>
      <Footer/>
    </>
  )
}

export default App
