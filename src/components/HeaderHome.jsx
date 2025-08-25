import videoLogo from '../assets/videobelajar.png'
import avaPic from '../assets/ava.png'
import hamburgerMenu from '../assets/hamburger.png'
import { useNavigate } from 'react-router'
import { useState } from 'react'
import logoutIcon from '../assets/keluar.png'
import BodyMedium from './BodyMedium'
import ButtonMenu from './ButtonMenu'

const HeaderHome = () => {
    const navigate = useNavigate()
    const [open, setOpen] = useState(false)
    return (
        <div className='relative'>
            <div className='flex border border-other-border w-full justify-between px-[24px] py-[16px] 
            sm:px-[120px] sm:py-[12px] '>
                <img className='w-[152px] sm:w-[237px]' src={videoLogo} alt="videobelajar" />
                <div className='hidden sm:flex sm:flex-row gap-[36px]'>
                <ButtonMenu onClick={() => navigate('/admin')}>Admin</ButtonMenu>
                <ButtonMenu className="flex items-center gap-[36px]">Kategori <img onClick={() => setOpen(!open)} src={avaPic} alt="profile" /></ButtonMenu>
                </div>
                <div className='flex sm:hidden'>
                    <button onClick={ () => setOpen(!open)} ><img src={hamburgerMenu} alt="menu" /></button>
                </div>      
            </div>

                {open && (
                <div className="absolute top-[69px] sm:top-[75px] sm:right-30 right-0 bg-white shadow-md border border-other-border z-50 w-full sm:w-[200px]">
                <ul className="flex flex-col divide-y divide-other-border " >
                    <li className="sm:hidden flex items-center gap-3 p-4 hover:bg-gray-100 ">
                    <ButtonMenu onClick={ () => navigate('/admin')}>Admin</ButtonMenu>
                    </li>
                    <li className="sm:hidden flex items-center gap-3 p-4 hover:bg-gray-100 ">
                    <ButtonMenu>Kategori</ButtonMenu>
                    </li>
                    <li className="flex items-center gap-3 p-4 hover:bg-gray-100">
                    <ButtonMenu>Profil Saya</ButtonMenu>
                    </li>
                    <li className="flex items-center gap-3 p-4 hover:bg-gray-100">
                    <ButtonMenu>Kelas Saya</ButtonMenu>
                    </li>
                    <li className="flex items-center gap-3 p-4 hover:bg-gray-100">
                    <ButtonMenu>Pesanan Saya</ButtonMenu>
                    </li>
                    <li className="flex items-center gap-2 p-4 hover:bg-gray-100">
                    <button onClick={ () => navigate('/')} className='font-medium leading-[140%] tracking-[0.2px] text-error-default cursor-pointer'>Keluar</button>
                    <img onClick={() => navigate('/')} src={logoutIcon} alt="Logout" className="w-5 h-5 cursor-pointer" />
                    </li>
                </ul>
                </div>
                    
                )}
            </div>
    )
}
export default HeaderHome