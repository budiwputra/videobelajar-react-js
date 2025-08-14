import '@fontsource/poppins';
const HeadingSemiBold = ({children}) => {
    return (
        <h2 className="font-semibold text-2xl leading-[120%] text-center sm:text-[32px] text-dark-primary  
        font-[poppins]" >{children}</h2>
    )
}
export default HeadingSemiBold