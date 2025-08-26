import avaCard from '../assets/avacard.png'
import ratings from '../assets//ratings.png'
import BodyLarge from './BodyLarge'
import BodyMedium from './BodyMedium'
import BodyRegular from './BodyRegular'
import HeadingSemiBold from './HeadingSemiBold'
import images from '../hooks/cardData'


const Card = () => {
    return (
        <div className='flex flex-col items-center justify-center w-full gap-[20px] sm:gap-[24px] 
        sm:grid sm:grid-cols-[auto_auto] lg:grid-cols-[auto_auto_auto]'>
        {images.map((e, index) => (
            <div key={index} className="border border-other-border flex flex-col items-center justify-center w-[320px] sm:w-[384px] p-[16px] sm:p-[20px] 
            gap-[16px] rounded-[10px] bg-white cursor-pointer">
            <div className='flex flex-col gap-[9px] sm:gap-[16px] justify-center'>
                <div className='flex flex-row sm:grid gap-[12px] sm:gap-[16px] items-center'>

                <div>
                <img className='w-[100px] sm:w-[344px] aspect-square sm:aspect-16/9 object-cover object-center rounded-[10px]' src={e.picture} alt={e.alt} />
                </div>

                <div className='flex flex-col gap-[8px] sm:gap-[16px]'>
                <div className='flex flex-col gap-[8px]'>
                <HeadingSemiBold size="card" className="text-left">{e.title}</HeadingSemiBold>
                <BodyMedium className="hidden sm:block sm:text-base text-dark-secondary">Mulai transformasi dengan instruktur professional, harga yang terjangkau, dan...</BodyMedium>
                </div>

                <div className='flex flex-row w-full items-center gap-[10px] '>
                    <img className='w-[36px] aspect-square sm:w-[40px] sm:aspect-square' src={avaCard} alt="Avatar" />
                    <div className='flex flex-col'>
                    <BodyMedium className="text-sm sm:text-base">Jenna Ortega</BodyMedium>
                    <div className='flex flex-row gap-[4px]'>
                    <BodyRegular className="text-xs sm:text-sm">Senior Accountant</BodyRegular>
                    <BodyRegular className="hidden sm:inline text-dark-secondary">di</BodyRegular>
                    <BodyLarge className="text-dark-secondary hidden sm:inline">Gojek</BodyLarge>
                    </div>
                    </div>
                </div>
                </div>

                </div>
                
                <div className='flex flex-row items-center justify-between w-full'>
                    <div className='flex flex-row items-center gap-[8px]'>
                    <img src={ratings} alt="" />
                    <BodyMedium className="text-xs sm:text-sm text-dark-secondary underline">3.5 (86)</BodyMedium>
                    </div>
                    <HeadingSemiBold size="price" className="text-primary">{e.price}</HeadingSemiBold>
                </div>
            </div>
            </div>
        ))}       
        </div>
    )
}
export default Card