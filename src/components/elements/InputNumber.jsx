const InputNumber = ({className, ...props}) => {
    return (
        <input className={`border border-other-border w-full text-sm sm:text-base font-normal leading-[140%] tracking-[0.2px]
        rounded-md py-[13px] px-[10px]
        `} {...props} type="number" />

    )
}
export default InputNumber