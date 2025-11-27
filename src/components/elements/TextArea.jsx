const TextArea = ({className, ...props}) => {
    return (
        <textarea className={`${className} border border-other-border w-full text-sm sm:text-base font-normal 
        leading-[140%] tracking-[0.2px] rounded-[10px] px-[8px]`} 
        {...props}
        defaultValue="Mulai transformasi dengan instruktur professional, harga yang terjangkau, dan program latihan yang disesuaikan dengan kebutuhan Anda" 
        ></textarea>
    )
}
export default TextArea