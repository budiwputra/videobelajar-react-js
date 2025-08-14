const Button = ({children}) => {
    return (
        <button className="w-full font-bold leading-[140%] tracking-[0.2px] 
        text-sm sm:text-base bg-primary-80 text-primary p-[7px] sm:p-[10px] rounded-[10px] hover:bg-primary hover:text-white cursor-pointer
        ">{children}</button>
    )
}
export default Button