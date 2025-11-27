const SecondaryButton = ({children, className, ...props}) => {
    return (
        <button className={`border border-secondary font-bold leading-[140%] tracking-[0.2px] 
        text-sm sm:text-base bg-secondary text-white   
        sm:py-[10px] sm:px-[26px] rounded-[10px] hover:bg-secondary-80 hover:text-secondary hover:border-secondary-80 cursor-pointer 
        ${className ?? "py-[7px] px-[22px]"}`}{...props}>{children}</button>
    )
}
export default SecondaryButton