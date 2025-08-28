const ButtonMenu = ({children, className, ...props}) => {
    return (
        <button className={`font-medium leading-[140%] tracking-[0.2px] text-dark-secondary cursor-pointer ${className ?? "text-base" }`} {...props} >
            {children}
        </button>
    )
}
export default ButtonMenu