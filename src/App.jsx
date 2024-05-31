import {Routes, Route} from 'react-router-dom'
import Main from './pages/main/Main'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Cars from './pages/cars/Cars'
import CarsPage from './pages/carspage/CarsPage'
import AddCars from './pages/addcars/AddCars'
import NotAvailable from './pages/notavailable/NotAvailable'
import RootLayout from './rootlayout/RootLayout'


const App = () => {

  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path='/' element={<Main />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/cars' element={<Cars/>} />
        <Route path='/cars/:id' element={<CarsPage/>} />
        <Route path='/cars/addcars' element={<AddCars/>} />
       
      </Route>
    
      <Route path='/*' element={<NotAvailable/>} />
    </Routes>

  )
}

export default App
