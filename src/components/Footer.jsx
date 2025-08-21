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
import { useState } from 'react'
import rightLogo from '../assets/right.png'
import bottomLogo from '../assets/bottom.png'

const Footer = () => {
    const [openMenu, setOpenMenu] = useState(null)

    const toggleMenu = (menu) => {
        setOpenMenu(openMenu === menu ? null : menu)
    }

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

                <div className='hidden sm:grid sm:grid-cols-[auto_auto_auto] gap-[45px]'>
                    <div className='sm:flex sm:flex-col sm:gap-[15px]'>
                        <div>
                        <BodyLarge>Kategori</BodyLarge>
                        </div>
                        <div className='sm:flex sm:flex-col sm:gap-[13px]'>
                        <BodyMedium className="text-dark-secondary">Digital & Teknologi</BodyMedium>
                        <BodyMedium className="text-dark-secondary">Pemasaran</BodyMedium>
                        <BodyMedium className="text-dark-secondary">Manajemen Bisnis</BodyMedium>
                        <BodyMedium className="text-dark-secondary">Pengembangan Diri</BodyMedium>
                        <BodyMedium className="text-dark-secondary">Desain</BodyMedium>
                        </div>
                    </div>
                    <div className='sm:flex sm:flex-col sm:gap-[15px]'>
                        <div>
                        <BodyLarge>Perusahaan</BodyLarge>
                        </div>
                        <div className='sm:flex sm:flex-col sm:gap-[13px]'>
                        <BodyMedium className="text-dark-secondary">Tentang Kami</BodyMedium>
                        <BodyMedium className="text-dark-secondary">FAQ</BodyMedium>
                        <BodyMedium className="text-dark-secondary">Kebijakan Privasi</BodyMedium>
                        <BodyMedium className="text-dark-secondary">Ketentuan Layanan</BodyMedium>
                        <BodyMedium className="text-dark-secondary">Bantuan</BodyMedium>
                        </div>
                    </div>
                    <div className='sm:flex sm:flex-col sm:gap-[15px]'>
                        <div>
                        <BodyLarge>Komunitas</BodyLarge>
                        </div>
                        <div className='sm:flex sm:flex-col sm:gap-[13px]'>
                        <BodyMedium className="text-dark-secondary">Tips Sukses</BodyMedium>
                        <BodyMedium className="text-dark-secondary">Blog</BodyMedium>
                        </div>
                    </div>
                </div>

                </div>

                <div className='flex flex-col gap-[12px] sm:hidden'>
                    <button className='font-medium leading-[140%] tracking-[0.2px]
                    text-left w-full flex justify-between items-center'
                    onClick={ () => toggleMenu("kategori")}
                    >Kategori <span>{openMenu === "kategori" ? <img src={rightLogo} /> : <img src={bottomLogo} /> }</span></button>

                    {openMenu === "kategori" && (
                        <div className=' border-other-border pl-[12px] py-[12px] flex flex-col gap-[12px]'>
                            <BodyMedium className="text-dark-secondary ">Digital & Teknologi</BodyMedium>
                            <BodyMedium className="text-dark-secondary ">Pemasaran</BodyMedium>
                            <BodyMedium className="text-dark-secondary ">Manajemen Bisnis</BodyMedium>
                            <BodyMedium className="text-dark-secondary ">Pengembangan Diri</BodyMedium>
                            <BodyMedium className="text-dark-secondary ">Desain</BodyMedium>
                        </div>
                    )}

                    <button className='font-medium leading-[140%] tracking-[0.2px]
                    text-left w-full flex justify-between items-center'
                    onClick={ () => toggleMenu("perusahaan")}
                    >Perusahaan <span>{openMenu === "perusahaan" ? <img src={rightLogo} /> : <img src={bottomLogo} />}</span></button>

                    {openMenu === "perusahaan" && (
                        <div className=' border-other-border pl-[12px] py-[12px] flex flex-col gap-[12px]'>
                            <BodyMedium className="text-dark-secondary ">Tentang Kami</BodyMedium>
                            <BodyMedium className="text-dark-secondary ">FAQ</BodyMedium>
                            <BodyMedium className="text-dark-secondary ">Kebijakan Privasi</BodyMedium>
                            <BodyMedium className="text-dark-secondary ">Ketentuan Layanan</BodyMedium>
                            <BodyMedium className="text-dark-secondary ">Bantuan</BodyMedium>
                        </div>
                    )}

                    <button className='font-medium leading-[140%] tracking-[0.2px]
                    text-left w-full flex justify-between items-center'
                    onClick={ () => toggleMenu("komunitas")}
                    >Komunitas <span>{openMenu === "komunitas" ? <img src={rightLogo} /> : <img src={bottomLogo} />}</span></button>

                    {openMenu === "komunitas" && (
                        <div className=' border-other-border pl-[12px] py-[12px] flex flex-col gap-[12px]'>
                            <BodyMedium className="text-dark-secondary ">Tips Sukses</BodyMedium>
                            <BodyMedium className="text-dark-secondary ">Blog</BodyMedium>
                        </div>
                    )}
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