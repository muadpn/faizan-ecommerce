import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import About from '../pages/about/About'
const UserRoute = () => {
  return (
    <Routes>
        <Route  path='/' element={<Home/>} />
        <Route  path='/About' element={<About/>} />
    </Routes>
  )
}

export default UserRoute