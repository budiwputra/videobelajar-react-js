import footerLogo from '../assets/footer.png'
import BodyLarge from './BodyLarge'
import BodyRegular from './BodyRegular'
import horizontalDiv from '../assets/horizontal.png'
import FooterMenuRegular from './FooterMenuRegular'
import FooterMenuSmall from './FooterMenuSmall'
import FooterSocial from './FooterSocial'

const Footer = () => {

    return (
        <div className="bg-white border border-other-border gap-[16px] p-[20px] flex flex-col 
        sm:gap-[20px] sm:py-[60px] sm:px-[120px]">
            <div className='flex flex-col gap-[16px]'>
                <div className='flex flex-col sm:grid sm:grid-cols-[30%_30%_auto]'>
                <div className='flex flex-col gap-[16px]'>
                <img className='w-[170px] sm:w-[204px]' src={footerLogo} alt="Logo" />
                <div className='flex flex-col gap-[8px] sm:gap-[12px]]'>
                <BodyLarge className="text-sm sm:text-lg">Gali Potensi Anda Melalui Pembelajaran Video di harisenin.com!</BodyLarge>
                <BodyRegular className="text-black">Jl. Usman Effendi No.50 Lowokwaru, Malang</BodyRegular>
                <BodyRegular className="text-black">+62-877-7123-1234</BodyRegular>
                </div>
                </div>
                <div className='hidden sm:grid'>
                </div>
                <FooterMenuRegular/>
                </div>
                <FooterMenuSmall/>
                <img className='sm:h-px sm:mt-[32px]' src={horizontalDiv} alt="Divider" />
                <FooterSocial/>
            </div>
        </div>
    )
}
export default Footer