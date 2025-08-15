import eyeLogo from '../assets/eye_off.png'

const InputPassword = () => {
    return (
        <div className='relative w-full'>
            <input className="border border-other-border w-full text-sm sm:text-base font-normal 
            leading-[140%] tracking-[0.2px]
            rounded-md py-[13px] px-[10px]   
            " type="password" /> <img className='absolute right-0 top-0
            top-1/2 transform -translate-y-1/2 cursor-pointer right-3' src={eyeLogo} alt="" />
        </div>

    )
}
export default InputPassword