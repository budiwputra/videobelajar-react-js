import Button from "../components/Button.jsx"
import InputText from "../components/InputText.jsx"
import GoogleButton from "../components/GoogleButton.jsx"
import HeadingSemiBold from "../components/HeadingSemiBold.jsx"
import BodyRegular from "../components/BodyRegular.jsx"
import BodyMedium from "../components/BodyMedium.jsx"
import ErrorDefault from "../components/ErrorDefault.jsx"
import SelectOption from "../components/SelectOption.jsx"
import SelectCountry from "../components/SelectCountry.jsx"
import logoId from '../assets/id.png'
import InputNumber from '../components/InputNumber.jsx'
import InputPassword from '../components/InputPassword.jsx'
import Header from '../components/Header.jsx'
import { useNavigate } from "react-router"


const App = () => {
    const navigate = useNavigate()

return (
<>
<Header/>
<div className="flex flex-col w-full min-h-screen justify-start items-center px-[28px] py-[20px] bg-background " >
    <div className="border border-other-border rounded-sm flex flex-col justify-center p-[20px] w-full gap-[20px] sm:w-[590px] bg-white" >
        <HeadingSemiBold>Pendaftaran Akun</HeadingSemiBold>
        <BodyRegular className="text-center text-dark-secondary">Yuk, Daftarkan akunmu sekarang juga!</BodyRegular>
        <BodyRegular>Nama Lengkap <ErrorDefault/></BodyRegular>
        <InputText/>
        <BodyRegular>E-Mail <ErrorDefault/></BodyRegular>
        <InputText/>
        <BodyRegular>Jenis Kelamin <ErrorDefault/></BodyRegular>
        <SelectOption>
            <option value="wanita">Wanita</option>
            <option value="pria">Pria</option>
        </SelectOption>
        <BodyRegular>No. Hp <ErrorDefault/></BodyRegular>
        <div className="flex flex-row gap-[12px] sm:gap-[24px] " >
            <div className=" flex flex-row w-[45%]">
            <img className="rounded-l-md" src={logoId} alt="" /> 
            <SelectCountry>
                <option value="">+62</option>
            </SelectCountry>
            </div>
            <div className="flex w-[55%]  ">
            <InputNumber/>
            </div>               
        </div>
        <BodyRegular>Kata Sandi <ErrorDefault/></BodyRegular>
        <InputPassword/>
        <BodyRegular>Konfirmasi Kata Sandi <ErrorDefault/></BodyRegular>
        <InputPassword/>
        <BodyMedium className="text-right text-sm sm:text-base text-dark-secondary">Lupa Password?</BodyMedium>
        <Button >Daftar</Button>
        <Button onClick={() => navigate('/')}>Masuk</Button>
        <BodyRegular className="text-center text-dark-secondary">atau</BodyRegular>
        <GoogleButton>Daftar dengan Google</GoogleButton>
    </div>     
</div>
</>

)
}

export default App