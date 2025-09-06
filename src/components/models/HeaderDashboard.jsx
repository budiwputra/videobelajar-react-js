import hamburgerMenu from '../../assets/hamburger.png'
import ButtonMenu from '../elements/ButtonMenu'
import { useNavigate } from 'react-router'
import { useImages } from '../../store/images'

const HeaderDashboard = () => {
    const navigate = useNavigate()
    const {avatar} = useImages()

    const randomIndex = Math.floor(Math.random() * avatar.length)
    const randomAvatar = avatar[randomIndex]   
    return (
        <div className='flex flex-row justify-between items-center border-b border-other-border py-[12px] px-[36px]'>

            <div className='flex flex-row gap-[16px] items-center'>
            <img className='cursor-pointer' src={hamburgerMenu} alt="" />
            <ButtonMenu onClick={() => {navigate('/dashboard')}} className="block text-left">Dashboard</ButtonMenu>
            </div>
            
            <div className='flex flex-row items-center gap-[16px]'>
            <span className='font-medium text-base leading-[140%] tracking-[0.2px] text-dark-secondary'>Giyu Tomioka</span>  
            <img src={randomAvatar} alt="Avatar" />
            </div>
        </div>
    )
}
export default HeaderDashboard