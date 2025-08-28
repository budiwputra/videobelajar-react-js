const images = [
    {
        desktop : '/assets/desktop1.png',
        mobile : '/assets/mobile1.png',
        alt : 'Gambar 1'
    },
    {
        desktop : '/assets/desktop2.png',
        mobile : '/assets/mobile2.png',
        alt : 'Gambar 2'
    },
    {
        desktop : '/assets/dekstop3.png',
        mobile : '/assets/mobile3.png',
        alt : 'Gambar 3'
    },
    {
        desktop : '/assets/desktop4.png',
        mobile : '/assets/mobile4.png',
        alt : 'Gambar 4'
    },
    {
        desktop : '/assets/desktop5.png',
        mobile : '/assets/mobile5.png',
        alt : 'Gambar 5'
    },
    {
        desktop : '/assets/dekstop6.png',
        mobile : '/assets/mobile6.png',
        alt : 'Gambar 6'
    },    
    {
        desktop : '/assets/desktop7.png',
        mobile : '/assets/mobile7.png',
        alt : 'Gambar 7'
    },    
    {
        desktop : '/assets/desktop8.png',
        mobile : '/assets/mobile8.png',
        alt : 'Gambar 8'
    },    
    {
        desktop : '/assets/desktop9.png',
        mobile : '/assets/mobile9.png',
        alt : 'Gambar 9'
    },
]
const Picture = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-[20px] sm:gap-x-[24px] sm:gap-y-[32px]">
            {images.map((img, index) => (
                <picture className="flex justify-center" key={index}>
                    <source media="(min-width:480px)" srcSet={img.desktop} />
                    <img src={img.mobile} alt={img.alt} />
                </picture>
            ))}
        </div>
    )
}
export default Picture