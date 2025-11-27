import googleLogo from '../../assets/google.png'
const GoogleButton = ({children}) => {
    return (
            <button className="border border-other-border rounded-[10px] font-bold text-sm sm:text-base w-full
            leading-[140%] tracking-[0.2px] py-[8px] flex items-center justify-center gap-[8px] cursor-pointer
            hover:bg-google-hover text-dark-secondary">
                <img className='' src={googleLogo} alt="google" />{children}</button>
    )
}
export default GoogleButton