import '@fontsource/poppins';
const HeadingSemiBold = ({children, className}) => {
    return (
        <h2 className={`${className ?? "text-center"} font-semibold text-2xl leading-[120%] sm:text-[32px] text-dark-primary  
        font-[poppins] `} >{children}</h2>
    )
}
export default HeadingSemiBold