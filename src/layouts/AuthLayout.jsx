import Header from "../components/models/Header"
import { Outlet } from "react-router"

const AuthLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header/>
            <div className="flex-1 flex justify-center items-center bg-background">
            <Outlet/>        
            </div>
        </div>

        
    )
}
export default AuthLayout