import Button from "./Button.jsx"
import BodySmall4 from "./BodySmall4.jsx"
import InputText from "./InputText.jsx"
import BodySmall3 from "./BodySmall3.jsx"
import Heading4 from "./Heading4.jsx"
import GoogleButton from "./GoogleButton.jsx"


const App = () => {
  return (
    <div className="border flex flex-col w-screen h-screen justify-start items-center px-[28px] py-[20px] bg-gray-300 " >
      <div className="border flex flex-col justify-center p-[20px] w-full max-w-lg gap-[20px]">
      <Heading4>Masuk ke Akun</Heading4>
      <BodySmall4 className="text-center">Yuk, Lanjutin belajarmu di videobelajar</BodySmall4>
      <BodySmall4>Email <span>*</span></BodySmall4>
      <InputText/>
      <BodySmall4>Kata Sandi <span>*</span></BodySmall4>
      <InputText/>
      <BodySmall3 className="text-right">Lupa Password?</BodySmall3>
      <Button>Masuk</Button>
      <Button>Daftar</Button>
      <BodySmall4 className="text-center">atau</BodySmall4>
      <GoogleButton></GoogleButton>
      </div>     
    </div>

  )
}

export default App