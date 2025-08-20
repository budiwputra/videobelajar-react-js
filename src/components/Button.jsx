const Button = ({children, className, ...props}) => {
    return (
        <button className={`${className ?? "py-[7px] px-[22px]"} border border-primary font-bold leading-[140%] tracking-[0.2px] 
        text-sm sm:text-base bg-primary text-white   
        sm:p-[10px] rounded-[10px] hover:bg-primary-80 hover:text-primary hover:border-primary-80 cursor-pointer
        `} {...props}>{children}</button>
    )
}
export default Button