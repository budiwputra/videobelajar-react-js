const SelectOption = ({children, className, ...props}) => {
    return (
        <select className={`border border-other-border text-sm sm:text-base font-normal leading-[140%] tracking-[0.2px]
        rounded-md px-[10px] py-[12px] w-ful`} {...props}>{children}
        </select>
    )
}
export default SelectOption