import footerLogo from '../assets/footer.png'
import BodyLarge from './BodyLarge'
import BodyRegular from './BodyRegular'
import HeadingBold from './HeadingBold'
import horizontalDiv from '../assets/horizontal.png'
import xLogo from '../assets/xLogo.png'
import fbLogo from '../assets/fbLogo.png'
import igLogo from '../assets/igLogo.png'
import inLogo from '../assets/inLogo.png'
import BodyMedium from './BodyMedium'

const Footer = () => {
    return (
        <div className="bg-white border border-other-border gap-[16px] p-[20px] flex flex-col 
        sm:gap-[20px] sm:py-[60px] sm:px-[120px]">
            <div className='flex flex-col gap-[16px]'>

                <img className='w-[170px] sm:w-[204px]' src={footerLogo} alt="Logo" />
                <div className='flex flex-col gap-[8px] sm:gap-[12px]]'>
                <BodyLarge className="text-sm sm:text-lg">Gali Potensi Anda Melalui Pembelajaran Video di harisenin.com!</BodyLarge>
                <BodyRegular className="text-black">Jl. Usman Effendi No.50 Lowokwaru, Malang</BodyRegular>
                <BodyRegular className="text-black">+62-877-7123-1234</BodyRegular>
                </div>

                <div className='flex flex-col gap-[12px] sm:hidden'>
                    <BodyLarge>Kategori</BodyLarge>
                    <BodyLarge>Perusahaan</BodyLarge>
                    <BodyLarge>Komunitas</BodyLarge>
                </div>
                <img className='sm:h-px sm:mt-[32px]' src={horizontalDiv} alt="Divider" />
                <div className='gap-[12px] flex flex-col'>
                    <div className='flex flex-row gap-[15px] sm:hidden'>
                        <img className='w-[35px] object-cover' src={inLogo} alt="" />
                        <img className='w-[35px] object-cover' src={fbLogo} alt="" />
                        <img className='w-[35px] object-cover' src={igLogo} alt="" />
                        <img className='w-[35px] object-cover' src={xLogo} alt="" />
                    </div>
                    <div className='sm:flex sm:flex-row justify-between items-center'>
                    <BodyMedium className="text-base text-dark-secondary">@2023 Gerobak Sayur All Rights Reserved.</BodyMedium>
                    <div className='hidden sm:flex sm:flex-row sm:gap-[15px]'>
                        <img className='w-[35px]' src={inLogo} alt="" />
                        <img className='w-[35px]' src={fbLogo} alt="" />
                        <img className='w-[35px]' src={igLogo} alt="" />
                        <img className='w-[35px]' src={xLogo} alt="" />
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer