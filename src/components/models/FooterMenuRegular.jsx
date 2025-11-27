import BodyLarge from "../elements/BodyLarge"
import BodyMedium from "../elements/BodyMedium"

const FooterMenuRegular = () => {
    return (

                <div className='hidden sm:grid sm:grid-cols-[auto_auto_auto] gap-[45px]'>
                    <div className='sm:flex sm:flex-col sm:gap-[15px]'>
                        <div>
                        <BodyLarge>Kategori</BodyLarge>
                        </div>
                        <div className='sm:flex sm:flex-col sm:gap-[13px]'>
                        <BodyMedium className="text-dark-secondary">Digital & Teknologi</BodyMedium>
                        <BodyMedium className="text-dark-secondary">Pemasaran</BodyMedium>
                        <BodyMedium className="text-dark-secondary">Bisnis Manajemen</BodyMedium>
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

    )
}
export default FooterMenuRegular