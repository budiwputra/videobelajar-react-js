import Button from "../components/elements/Button.jsx"
import InputText from "../components/elements/InputText.jsx"
import HeadingSemiBold from "../components/elements/HeadingSemiBold.jsx"
import BodyRegular from "../components/elements/BodyRegular.jsx"
import BodyMedium from "../components/elements/BodyMedium.jsx"
import HeadingBold from "../components/elements/HeadingBold.jsx"
import NavBar from "../components/models/NavBar.jsx"
import SecondaryButton from "../components/elements/SecondaryButton.jsx"
import '../App.css'
import Card from "../components/models/Card.jsx"
import { Outlet } from "react-router"

const App = () => {
  return (
    <div className="flex flex-col w-full min-h-full justify-start items-center px-[20px] py-[28px] gap-[24px] sm:gap-[64px] 
    sm:px-[120px] sm:py-[64px] bg-background" >
      <div className="bg-[url('/assets/bgHero.jpg')] rounded-[10px] bg-cover bg-center bg-no-repeat">
      <div className="border border-black/80 rounded-[10px] flex flex-col justify-center items-center px-[20px] py-[37px] w-full 
      sm:px-[140px] sm:pt-[68.5px] sm:pb-[50.5px] bg-black/80 gap-[12px]" >
        <HeadingBold className="text-center text-2xl sm:text-5xl">
          Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video Interaktif!</HeadingBold>
        <BodyMedium className="text-white text-center font-normal sm:font-medium text-sm sm:text-base ">Temukan ilmu baru yang menarik dan mendalam melalui koleksi video
          Pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat berpartisipasi dalam latihan interaktif yang akan meningkatkan
          pemahaman Anda.
        </BodyMedium>
        <Button className="w-fit font-normal sm:font-bold py-[10px] px-[8px] sm:px-[16px] mt-[12px]">Temukan Video Course untuk Dipelajari!</Button>
      </div>
      </div>

      <div className="flex flex-col w-full gap-[32px] ">
        <div className="flex flex-col w-full gap-[10px]">
        <HeadingSemiBold className="text-left">Koleksi Video Pembelajaran Unggulan</HeadingSemiBold>
        <BodyMedium className="text-left text-dark-secondary text-sm sm:text-base">Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!</BodyMedium>
        </div>

        <div className="flex space-x-6 overflow-x-auto scrollbar-hide">
          <NavBar>
            <li className="text-tertiary-default flex flex-col justify-between gap-[12px]"><span>Semua Kelas</span> <span className="border-3 rounded-sm w-[52px]"></span></li>
            <li className="">Pemasaran</li>
            <li className="">Desain</li>
            <li className="">Pengembangan Diri</li>
            <li className="">Bisnis Manajemen</li>
            <li className="">Digital & Teknologi</li>
          </NavBar>
        </div>

        <div className="w-full">
          <Card>
            <Outlet/>
          </Card>
        </div>
        
      </div>

      <div className="bg-[url('/assets/bgFooter.jpg')] bg-cover bg-center bg-no-repeat rounded-sm w-full ">
        <div className="border border-black/80 bg-black/80 rounded-sm text-base sm:text-[18px] flex-col flex items-center justify-center
        py-[48px] px-[20px] sm:py-[92px] sm:px-[337.5px] gap-[4px] w-full">
          <BodyMedium className="text-white">NEWSLETTER</BodyMedium>
          <HeadingSemiBold className="text-center text-white">Mau Belajar Lebih Banyak?</HeadingSemiBold>
          <BodyRegular className="text-white text-center mt-[6px]">Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran
            spesial dari program-program terbaik harisenin.com
          </BodyRegular>
          <div className=" border-amber-500 w-full sm:relative">
          <InputText placeholder="Masukkan Emailmu" className="bg-white border mt-[36px] text-center sm:text-left sm:px-[26px] sm:py-[18px]"/>
          <SecondaryButton className="w-full sm:w-fit py-[10px] px-[26px] sm:absolute sm:right-2 sm:top-11 mt-[16px] sm:mt-0">Subscribe</SecondaryButton>
          </div>
        </div>     
      </div>   

    </div>
  )
}

export default App