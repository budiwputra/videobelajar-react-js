import videoLogo from '../../assets/videobelajar.png'
import avaPic from '../../assets/ava.png'
import hamburgerMenu from '../../assets/hamburger.png'
import { useNavigate } from 'react-router'
import { useState } from 'react'
import logoutIcon from '../../assets/keluar.png'
import BodyMedium from '../elements/BodyMedium'
import ButtonMenu from '../elements/ButtonMenu'

const HeaderHome = () => {
    const navigate = useNavigate()
    const [open, setOpen] = useState(false)
    return (
        <div className='relative'>
            <div className='flex border border-other-border w-full justify-between px-[24px] py-[16px] 
            sm:px-[120px] sm:py-[12px] '>
                <img onClick={() => {navigate('/home')}} className='w-[152px] sm:w-[237px] cursor-pointer' src={videoLogo} alt="videobelajar" />
                <div className='hidden sm:flex sm:flex-row gap-[36px]'>
                <ButtonMenu className=" hover:text-primary " onClick={() => navigate('/dashboard')}>[Dashboard]</ButtonMenu>
                <ButtonMenu onClick={() => {navigate('category')}} className="flex items-center gap-[36px] hover:text-primary">Kategori 
                    </ButtonMenu>
                    <img className='cursor-pointer' onClick={() => setOpen(!open)} src={avaPic} alt="profile" />
                </div>
                <div className='flex sm:hidden'>
                    <button onClick={ () => setOpen(!open)} ><img src={hamburgerMenu} alt="menu" /></button>
                </div>      
            </div>

                {open && (
                <div className="absolute top-[69px] sm:top-[75px] sm:right-30 right-0 bg-white shadow-md border border-other-border z-50 w-full sm:w-[200px]">
                <ul className="flex flex-col divide-y divide-other-border " >
                    <li className="sm:hidden flex items-center gap-3 p-4 hover:bg-gray-100 ">
                    <ButtonMenu onClick={ () => navigate('/dashboard')}>Dashboard</ButtonMenu>
                    </li>
                    <li className="sm:hidden flex items-center gap-3 p-4 hover:bg-gray-100 ">
                    <ButtonMenu>Kategori</ButtonMenu>
                    </li>
                    <li className="flex items-center gap-3 p-4 hover:bg-gray-100">
                    <ButtonMenu>Profil Saya</ButtonMenu>
                    </li>
                    <li className="flex items-center gap-3 p-4 hover:bg-gray-100">
                    <ButtonMenu onClick={()=> navigate('/text')}>Kelas Saya</ButtonMenu>
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