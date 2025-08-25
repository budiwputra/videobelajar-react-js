import {Routes, Route} from 'react-router'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Admin from './pages/Admin.jsx'

const App = () => {
    return (
        <Routes>
            <Route index element={<Login/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/home' element={<Home/>} />
            <Route path='/admin' element={<Admin/>} />
        </Routes>
    )
}
export default App