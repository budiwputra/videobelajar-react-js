
const InputText = ({className, ...props}) => {
    return (
        <input pla className={`${className} border border-other-border w-full text-sm sm:text-base font-normal leading-[140%] tracking-[0.2px]
        rounded-[10px] py-[10px] px-[8px]
        `} type="text" {...props} />

    )
}
export default InputText