import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';

const HeadingBold = ({children, className}) => {
    return (
        <h1 className={`font-bold leading-[110%] font-[poppins] text-white ${className}`}>{children}</h1>
    )
}
export default HeadingBold