import Button from "./components/Button.jsx"
import InputText from "./components/InputText.jsx"
import GoogleButton from "./components/GoogleButton.jsx"
import HeadingSemiBold from "./components/HeadingSemiBold.jsx"
import BodyRegular from "./components/BodyRegular.jsx"
import BodyMedium from "./components/BodyMedium.jsx"
import ErrorDefault from "./components/ErrorDefault.jsx"


const App = () => {
  return (
    <div className="border flex flex-col w-screen min-h-screen justify-start items-center px-[28px] py-[20px] bg-background " >
      <div className="border border-other-border rounded-sm flex flex-col justify-center p-[20px] w-full gap-[20px] sm:w-[590px] bg-white" >
      <HeadingSemiBold>Masuk ke Akun</HeadingSemiBold>
      <BodyRegular className="text-center">Yuk, Lanjutin belajarmu di videobelajar.</BodyRegular>
      <BodyRegular>E-Mail <ErrorDefault/></BodyRegular>
      <InputText/>
      <BodyRegular>Kata Sandi <ErrorDefault/></BodyRegular>
      <InputText/>
      <BodyMedium className="text-right">Lupa Password?</BodyMedium>
      <Button>Masuk</Button>
      <Button>Daftar</Button>
      <BodyRegular className="text-center">atau</BodyRegular>
      <GoogleButton>Masuk dengan Google</GoogleButton>
      </div>     
    </div>

  )
}

export default App