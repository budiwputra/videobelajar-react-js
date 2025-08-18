const NavBar = ({children}) => {
    return (
        <ul className="flex flex-row items-centerjustify-start 
        [&>li]:py-[12px] [&>li]:pr-[36px] [&>li]:font-medium [&>li]:leading-[140%] [&>li]:tracking-[0.2px] 
        [&>li]:text-sm [&>li]:sm:text-base text-dark-secondary">{children}</ul>
    )
}
export default NavBar