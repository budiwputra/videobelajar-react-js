const   BodyRegular = ({children, className}) => {
    return (
            <span className={`font-normal leading-[140%] tracking-[0.2px] text-base 
            ${className ?? "text-dark-secondary"}`} >{children}</span>
        
    )
}
export default BodyRegular