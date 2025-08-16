const BodyMedium = ({children, className}) => {
    return (
            <p className={`font-medium text-sm leading-[140%] tracking-[0.2spanx] sm:text-base ${className}
            text-dark-secondary`} >{children}</p>
            
    )
}
export default BodyMedium