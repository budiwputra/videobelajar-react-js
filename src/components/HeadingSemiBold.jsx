import '@fontsource/poppins';
const HeadingSemiBold = ({children, size = "default", className}) => {
    const sizeClasses = {
        card: "text-base sm:text-lg",
        price: "text-[20px] sm:text-[24px]",
        default: "text-2xl sm:text-[32px]"
    }
    return (
        <h2 className={`${className ?? "text-center"} ${sizeClasses[size]} font-semibold leading-[120%] text-dark-primary  
        font-[poppins]`} >{children}</h2>
    )
}
export default HeadingSemiBold