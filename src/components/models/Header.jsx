import videoLogo from '../../assets/videobelajar.png'

const Header = () => {
    return (
            <div className='flex border border-other-border w-full justify-start px-[24px] py-[16px] 
            sm:px-[120px] sm:py-[12px]'>
                <img className='w-[152px] sm:w-[237px]' src={videoLogo} alt="videobelajar" />
            </div>
    )
}
export default Header