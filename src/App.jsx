import {Routes, Route} from 'react-router'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'

const App = () => {
    return (
        <Routes>
            <Route index element={<Login/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/home' element={<Home/>} />
        </Routes>
    )
}
export default App