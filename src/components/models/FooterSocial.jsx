import BodyMedium from '../elements/BodyMedium'
import xLogo from '../../assets/xLogo.png'
import fbLogo from '../../assets/fbLogo.png'
import igLogo from '../../assets/igLogo.png'
import inLogo from '../../assets/inLogo.png'

const FooterSocial = () => {
    return (
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
    )
}
export default FooterSocial