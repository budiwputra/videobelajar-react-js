import { useState } from 'react'
import eyeLogo from '../../assets/eye_off.png'
import eyeOn from '../../assets/eye_on.png'

const InputPassword = ({className, ...props}) => {
    const [showPassword, setShowPassword] = useState(false)
    return (
        <div className='relative w-full'>
            <input className={`border border-other-border w-full text-sm sm:text-base 
            font-normal leading-[140%] tracking-[0.2px] rounded-md py-[10px] px-[10px]   
            `} type={showPassword ? 'text' : 'password'} {...props} /> <img className='absolute
            top-1/2 transform -translate-y-1/2 cursor-pointer right-2 bg-white px-2 py-1' src={showPassword ? `${eyeOn}` : `${eyeLogo}`} 
            alt="Toggle Password"
            // onClick={() => setShowPassword(!showPassword) }
            onMouseDown={() => setShowPassword(true)}
            onMouseUp={() => setShowPassword(false)}
            onMouseLeave={() => setShowPassword(false)}
            onTouchStart={() => setShowPassword(true)}
            onTouchEnd={() => setShowPassword(false)}            
            />
        </div>
    )
}
export default InputPassword