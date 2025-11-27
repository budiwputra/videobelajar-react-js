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
import { useRef } from "react";
import { useRegister } from "../hooks/useRegister.js";

const App = () => {
    const navigate = useNavigate()

    const formRef = useRef();
    const { registerUser, loading, message } = useRegister();

    const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
        fullName: e.target.fullName.value.trim(),
        email: e.target.email.value.trim(),
        gender: e.target.gender.value.trim(),
        country: e.target.country.value.trim(),
        phone: e.target.phone.value.trim(),
        password: e.target.password.value.trim(),
        };
        registerUser(formData);
    };

return (

<div className="flex flex-col w-full min-h-screen justify-start items-center px-[28px] py-[20px] bg-background " >
    <form ref={formRef} onSubmit={handleSubmit}  className="border border-other-border rounded-sm flex flex-col justify-center p-[20px] w-full gap-[20px] sm:w-[590px] bg-white" >
        <HeadingSemiBold>Pendaftaran Akun</HeadingSemiBold>
        <BodyRegular className="text-center text-dark-secondary">Yuk, Daftarkan akunmu sekarang juga!</BodyRegular>
        <BodyRegular>Nama Lengkap <ErrorDefault/></BodyRegular>
        <InputText name="fullName"/>
        <BodyRegular>E-Mail <ErrorDefault/></BodyRegular>
        <InputText name="email"/>
        <BodyRegular>Jenis Kelamin <ErrorDefault/></BodyRegular>
        <SelectOption name="gender">
            <option value="Wanita">Wanita</option>
            <option value="Pria">Pria</option>
        </SelectOption>
        <BodyRegular>No. Hp <ErrorDefault/></BodyRegular>

        <div className="gap-[12px] sm:gap-[24px] grid grid-cols-[45%_auto]" >

            <div className="flex">
            <img className="rounded-l-md" src={logoId} alt="" /> 
            <SelectCountry name="country">
                <option value="+62">+62</option>
            </SelectCountry>
            </div>

            <div className="">
            <InputNumber name="phone"/>
            </div>               
        </div>
        
        <BodyRegular>Kata Sandi <ErrorDefault/></BodyRegular>
        <InputPassword name="password" />
        <BodyRegular>Konfirmasi Kata Sandi <ErrorDefault/></BodyRegular>
        <InputPassword/>
        <BodyMedium className="text-right text-sm sm:text-base text-dark-secondary">Lupa Password?</BodyMedium>
        <Button disabled={loading} type="submit" >{loading ? "Loading..." : "Daftar"}</Button>
        {message && (
            <span className="flex justify-center" 
            style={{
            color: message.includes("✅") ? "green" : "red",
            }}
            >{message}       
            </span>
        )}

        <Button onClick={() => navigate('/')}>Masuk</Button>
        <div className="flex items-center gap-2">
        <div className="flex-grow h-px bg-gray-300"></div>
        <BodyRegular className="text-center text-dark-secondary">atau</BodyRegular>
        <div className="flex-grow h-px bg-gray-300"></div>
        </div>
        <GoogleButton>Daftar dengan Google</GoogleButton>
    </form>     
</div>

)
}

export default App