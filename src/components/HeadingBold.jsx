const HeadingBold = ({children, className}) => {
    return (
        <h1 className={`font-bold leading-[110%] font-[poppins] text-white ${className}`}>{children}</h1>
    )
}
export default HeadingBold