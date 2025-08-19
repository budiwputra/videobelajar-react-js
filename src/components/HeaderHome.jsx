import videoLogo from '../assets/videobelajar.png'
import avaPic from '../assets/ava.png'
import hamburgerMenu from '../assets/hamburger.png'

const HeaderHome = () => {
    return (
            <div className='flex border border-other-border w-full justify-between px-[24px] py-[16px] 
            sm:px-[120px] sm:py-[12px] '>
                <img className='w-[152px] sm:w-[237px]' src={videoLogo} alt="videobelajar" />
                <div className='hidden sm:flex'>
                <button className='flex items-center gap-[36px] 
                font-medium text-base leading-[140%] tracking-[0.2px] text-dark-secondary cursor-pointer'>Kategori <img src={avaPic} alt="profile" /> </button>
                </div>
                <div className='flex sm:hidden'>
                    <button><img src={hamburgerMenu} alt="menu" /></button>
                </div>
            </div>
    )
}
export default HeaderHome