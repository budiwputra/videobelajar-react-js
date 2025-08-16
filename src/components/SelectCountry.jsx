const SelectCountry = ({children, ...props}) => {
    return (
        <select className="border border-other-border text-sm sm:text-base font-normal leading-[140%] tracking-[0.2px] text-dark-secondary
         px-[10px] py-[10px] rounded-r-md w-full"{...props}>{children}
        </select>
    )
}
export default SelectCountry