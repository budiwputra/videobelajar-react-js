import Button from "../components/Button.jsx"
import InputText from "../components/InputText.jsx"
import GoogleButton from "../components/GoogleButton.jsx"
import HeadingSemiBold from "../components/HeadingSemiBold.jsx"
import BodyRegular from "../components/BodyRegular.jsx"
import BodyMedium from "../components/BodyMedium.jsx"
import ErrorDefault from "../components/ErrorDefault.jsx"
import InputPassword from "../components/InputPassword.jsx"
import Header from "../components/Header.jsx"
import { useNavigate } from "react-router"

const App = () => {
  const navigate = useNavigate()
  return (
    
    <div className="flex flex-col min-h-screen">

    <Header/>
    <div className="flex-1 flex flex-col w-full justify-center items-center px-[28px] py-[20px] bg-background" >
      <div className="border border-other-border 
      rounded-sm flex flex-col justify-center p-[20px] w-full sm:w-[590px] gap-[20px] bg-white  " >
      <HeadingSemiBold>Masuk ke Akun</HeadingSemiBold>
      <BodyRegular className="text-center text-dark-secondary">Yuk, Lanjutin belajarmu di videobelajar.</BodyRegular>
      <BodyRegular>E-Mail <ErrorDefault/></BodyRegular>
      <InputText/>
      <BodyRegular>Kata Sandi <ErrorDefault/></BodyRegular>
      <InputPassword/>
      <BodyMedium className="text-right text-sm sm:text-base text-dark-secondary">Lupa Password?</BodyMedium>
      <Button onClick={() => navigate('/home')} >Masuk</Button>
      <Button onClick={() => navigate('/register')} >Daftar</Button>
      <BodyRegular className="text-center text-dark-secondary">atau</BodyRegular>
      <GoogleButton>Masuk dengan Google</GoogleButton>
      </div>     
    </div>

    </div>
    


  )
}

export default App