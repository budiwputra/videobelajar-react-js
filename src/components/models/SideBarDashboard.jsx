import videoLogo from '../../assets/logo.png'
import BodyLarge from '../elements/BodyLarge'
import ButtonMenu from "../elements/ButtonMenu"
import bottomLogo from '../../assets/bottom.png'
import upLogo from '../../assets/up.png'
import { useNavigate } from 'react-router'
import { useState } from 'react'

const SideBarDashboard = () => {
    const navigate = useNavigate()

    const [openMenu, setOpenMenu] = useState(null)

    const toggleMenu = (menu) => {
        setOpenMenu(openMenu === menu ? null : menu)
    }
    return (
        <div className="hidden sm:flex sm:flex-col">
            <div className='flex flex-row items-center py-[16px] px-[36px]'>
            <img onClick={() => {navigate('/home')}} className='h-[30px] cursor-pointer' src={videoLogo} alt="" />
            </div>

            <div className='flex flex-col'>
                <ButtonMenu onClick={ () => toggleMenu("product") } className="w-full text-left py-[16px] pl-[36px] pr-[16px] hover:bg-secondary 
                flex justify-between">Product <span>{openMenu === "product" ? 
                <img src={upLogo} alt="" /> : 
                <img src={bottomLogo} alt="" />}</span>                 
                </ButtonMenu>
                {openMenu === "product" && (
                    <div>                      
                        <ButtonMenu onClick={() => {navigate('product-entry')}} className="w-full text-left py-[16px] px-[36px]
                        hover:bg-secondary bg-secondary-80">Product Entry</ButtonMenu>
                        <ButtonMenu onClick={() => {navigate('product-list')}} className="block w-full text-left py-[16px] px-[36px] 
                        hover:bg-secondary bg-secondary-80">Product List</ButtonMenu>
                    </div>
                )}
            </div>
        </div>
    )
}
export default SideBarDashboard