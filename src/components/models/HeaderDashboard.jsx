import hamburgerMenu from '../../assets/hamburger.png'
import ButtonMenu from '../elements/ButtonMenu'
import profilePic from '../../assets/ava.png'
import { useNavigate } from 'react-router'
import { useImages } from '../../store/images'
import { fetchMe } from "../../store/redux/userReducer"
import { useEffect} from "react"
import { useSelector, useDispatch } from "react-redux"

const HeaderDashboard = () => {

    const { currentUser, isLoading } = useSelector((state) => state.user)

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {avatar} = useImages()

    const randomIndex = Math.floor(Math.random() * avatar.length)
    const randomAvatar = avatar[randomIndex]
    
    useEffect(() => {
    dispatch(fetchMe());
    }, [dispatch]);

    return (
        <div className='flex flex-row justify-between items-center border-b border-other-border py-[12px] px-[36px]'>

            <div className='flex flex-row gap-[16px] items-center'>
            <img className='cursor-pointer' src={hamburgerMenu} alt="" />
            <ButtonMenu onClick={() => {navigate('/dashboard')}} className="block text-left">Dashboard</ButtonMenu>
            </div>
            
            <div className='flex flex-row items-center gap-[16px]'>
            <span className='font-medium text-base leading-[140%] tracking-[0.2px] text-dark-secondary'>{isLoading ? "Full Name" : currentUser?.fullname}</span>  
            <img className='w-[40px] aspect-square' src={profilePic} alt="Avatar" />
            </div>
        </div>
    )
}
export default HeaderDashboard