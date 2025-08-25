import cardContent from '../assets/card.png'
import avaCard from '../assets/avacard.png'
import ratings from '../assets//ratings.png'
import BodyLarge from '../components/BodyLarge'
import BodyMedium from '../components/BodyMedium'
import BodyRegular from '../components/BodyRegular'
import HeadingSemiBold from '../components/HeadingSemiBold'

const Admin = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
        gap-[20px] sm:gap-x-[24px] sm:gap-y-[32px] border border-amber-600">
            <div className="border flex flex-col items-center md:w-[384px] md:p-[20px] gap-[16px] rounded-[10px] bg-white">

                <div className='flex flex-row md:flex-col gap-[16px]'>

                <div>
                <img className='w-[82px] h-[82px] md:w-[344px] md:h-[193px] object-cover object-center' src={cardContent} alt="" />
                </div>

                <div className='flex flex-col gap-[8px]'>
                <div className='border flex flex-col gap-[8px]'>
                <HeadingSemiBold size="card" className="text-left">Big 4 Auditor Financial Analyst</HeadingSemiBold>
                <BodyMedium className="hidden md:block sm:text-base text-dark-secondary">Mulai transformasi dengan instruktur professional, harga yang terjangkau, dan...</BodyMedium>
                </div>

                <div className='flex flex-row border w-full items-center gap-[10px]'>
                    <img src={avaCard} alt="" />
                    <div className='flex flex-col'>
                    <BodyMedium>Jenna Ortega</BodyMedium>
                    <div className='flex flex-row gap-[4px]'>
                    <BodyRegular>Senior Accountant</BodyRegular>
                    <BodyRegular className="hidden md:inline text-dark-secondary">di</BodyRegular>
                    <BodyLarge className="text-dark-secondary hidden md:inline">Gojek</BodyLarge>
                    </div>
                    </div>
                </div>
                </div>

                </div>
                
                

                <div className='flex flex-row items-center justify-between border  w-full'>
                    <img src={ratings} alt="" />
                    <HeadingSemiBold size="price" className="text-primary">Rp 300K</HeadingSemiBold>
                </div>
            </div>

        </div>
    )
}
export default Admin