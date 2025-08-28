import Button from "../components/elements/Button.jsx"
import InputText from "../components/elements/InputText.jsx"
import GoogleButton from "../components/elements/GoogleButton.jsx"
import HeadingSemiBold from "../components/elements/HeadingSemiBold.jsx"
import BodyRegular from "../components/elements/BodyRegular.jsx"
import BodyMedium from "../components/elements/BodyMedium.jsx"
import ErrorDefault from "../components/elements/ErrorDefault.jsx"
import SelectOption from "../components/elements/SelectOption.jsx"
import SelectCountry from "../components/elements/SelectCountry.jsx"
import logoId from '../assets/id.png'
import InputNumber from '../components/elements/InputNumber.jsx'
import InputPassword from '../components/elements/InputPassword.jsx'
import Header from '../components/models/Header.jsx'
import { useNavigate } from "react-router"


const App = () => {
    const navigate = useNavigate()

return (

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

        <div className="gap-[12px] sm:gap-[24px] grid grid-cols-[45%_auto]" >

            <div className="flex">
            <img className="rounded-l-md" src={logoId} alt="" /> 
            <SelectCountry>
                <option value="">+62</option>
            </SelectCountry>
            </div>

            <div className="">
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
        <div className="flex items-center gap-2">
        <div className="flex-grow h-px bg-gray-300"></div>
        <BodyRegular className="text-center text-dark-secondary">atau</BodyRegular>
        <div className="flex-grow h-px bg-gray-300"></div>
        </div>
        <GoogleButton>Daftar dengan Google</GoogleButton>
    </div>     
</div>

)
}

export default App