import Button from "../components/elements/Button.jsx"
import InputText from "../components/elements/InputText.jsx"
import GoogleButton from "../components/elements/GoogleButton.jsx"
import HeadingSemiBold from "../components/elements/HeadingSemiBold.jsx"
import BodyRegular from "../components/elements/BodyRegular.jsx"
import BodyMedium from "../components/elements/BodyMedium.jsx"
import ErrorDefault from "../components/elements/ErrorDefault.jsx"
import InputPassword from "../components/elements/InputPassword.jsx"
import { useNavigate } from "react-router"

const App = () => {
  const navigate = useNavigate()
  return (    
    <div className="flex flex-col justify-center">
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
      <div className="flex items-center gap-2">
      <div className="flex-grow h-px bg-gray-300"></div>
      <BodyRegular className="text-center text-dark-secondary">atau</BodyRegular>
      <div className="flex-grow h-px bg-gray-300"></div>
      </div>
      <GoogleButton>Masuk dengan Google</GoogleButton>
      </div>     
    </div>
  )
}

export default App