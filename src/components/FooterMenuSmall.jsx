import { useState } from 'react'
import BodyMedium from "./BodyMedium"
import rightLogo from '../assets/right.png'
import bottomLogo from '../assets/bottom.png'

const FooterMenuSmall = () => {
    const [openMenu, setOpenMenu] = useState(null)

    const toggleMenu = (menu) => {
        setOpenMenu(openMenu === menu ? null : menu)
    }

    return (

                <div className='flex flex-col gap-[12px] sm:hidden'>
                    <button className='font-medium leading-[140%] tracking-[0.2px]
                    text-left w-full flex justify-between items-center'
                    onClick={ () => toggleMenu("kategori")}
                    >Kategori <span>{openMenu === "kategori" ? <img src={bottomLogo} /> : <img src={rightLogo} /> }</span></button>

                    {openMenu === "kategori" && (
                        <div className=' border-other-border pl-[12px] py-[12px] flex flex-col gap-[12px]'>
                            <BodyMedium className="text-dark-secondary ">Digital & Teknologi</BodyMedium>
                            <BodyMedium className="text-dark-secondary ">Pemasaran</BodyMedium>
                            <BodyMedium className="text-dark-secondary ">Bisnis Manajemen</BodyMedium>
                            <BodyMedium className="text-dark-secondary ">Pengembangan Diri</BodyMedium>
                            <BodyMedium className="text-dark-secondary ">Desain</BodyMedium>
                        </div>
                    )}

                    <button className='font-medium leading-[140%] tracking-[0.2px]
                    text-left w-full flex justify-between items-center'
                    onClick={ () => toggleMenu("perusahaan")}
                    >Perusahaan <span>{openMenu === "perusahaan" ? <img src={bottomLogo} /> : <img src={rightLogo} />}</span></button>

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
                    >Komunitas <span>{openMenu === "komunitas" ? <img src={bottomLogo} /> : <img src={rightLogo} />}</span></button>

                    {openMenu === "komunitas" && (
                        <div className=' border-other-border pl-[12px] py-[12px] flex flex-col gap-[12px]'>
                            <BodyMedium className="text-dark-secondary ">Tips Sukses</BodyMedium>
                            <BodyMedium className="text-dark-secondary ">Blog</BodyMedium>
                        </div>
                    )}
                </div>

    )
}
export default FooterMenuSmall