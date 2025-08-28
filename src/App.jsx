import {Routes, Route, Navigate} from 'react-router'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Category from './pages/Category.jsx'
import ProductEntry from './pages/ProductEntry.jsx'
import ProductList from './pages/ProductList.jsx'
import HomeLayout from './layouts/HomeLayout.jsx'
import DashboardLayout from './layouts/DashboardLayout.jsx'
import AuthLayout from './layouts/AuthLayout.jsx'

const App = () => {
    return (
        <Routes>
            {/* <Route path='/' element={<Navigate to="/login"/>} />
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>} /> */}
            <Route path="/" element={<Navigate to="/login" replace />} />

            <Route path='/' element={<AuthLayout/>}>
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>}/>
            </Route>

            <Route path='/home' element={<HomeLayout/>} >
            <Route index element={<Home/>} />
            <Route path='category' element={<Category/>} />            
            </Route>

            <Route path='/dashboard' element={<DashboardLayout/>} >
            <Route index element={<Dashboard/>}/>
            <Route path='product-entry' element={<ProductEntry/>}/>
            <Route path='product-list' element={<ProductList/>}/>
            <Route />
            
            </Route>

        </Routes>
    )
}
export default App