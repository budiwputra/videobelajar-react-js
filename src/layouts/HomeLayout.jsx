import { Outlet } from "react-router"
import HeaderHome from "../components/models/HeaderHome"
import Footer from "../components/models/Footer"

const HomeLayout = () => {
    return (
        <>
        <HeaderHome/>
            <Outlet/>
        <Footer/>     
        </>
    )
}
export default HomeLayout