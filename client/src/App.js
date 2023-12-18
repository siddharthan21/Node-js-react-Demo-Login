import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Registration from './Pages/Register/Registration.jsx';
import Home from './Pages/Home/Home.jsx';
const App = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={<Registration/>}/>
                <Route path='/sg' element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}
export default App
