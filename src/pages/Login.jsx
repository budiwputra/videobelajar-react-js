import Button from "../components/elements/Button.jsx"
import InputText from "../components/elements/InputText.jsx"
import GoogleButton from "../components/elements/GoogleButton.jsx"
import HeadingSemiBold from "../components/elements/HeadingSemiBold.jsx"
import BodyRegular from "../components/elements/BodyRegular.jsx"
import BodyMedium from "../components/elements/BodyMedium.jsx"
import ErrorDefault from "../components/elements/ErrorDefault.jsx"
import InputPassword from "../components/elements/InputPassword.jsx"
import { useNavigate } from "react-router"
import { useRef } from "react"
import { useLogin } from "../hooks/useLogin"

const App = () => {
  const navigate = useNavigate()
  const formRef = useRef()
  const { loginUser, loading, message } = useLogin()

  return (    
    <div className="flex flex-col justify-center">
      <div className="border border-other-border rounded-sm flex flex-col justify-center p-[20px] w-full sm:w-[590px] gap-[20px] bg-white">
      <form ref={formRef} onSubmit={(e) => {
        e.preventDefault()
        loginUser({
          email: e.target.email.value.trim(),
          password: e.target.password.value.trim(),
        })
        
      }} className="flex flex-col justify-center gap-[20px] bg-white"  >
      <HeadingSemiBold>Masuk ke Akun</HeadingSemiBold>
      <BodyRegular className="text-center text-dark-secondary">Yuk, Lanjutin belajarmu di videobelajar.</BodyRegular>
      <BodyRegular>E-Mail <ErrorDefault/></BodyRegular>
      <InputText name="email"/>
      <BodyRegular>Kata Sandi <ErrorDefault/></BodyRegular>
      <InputPassword name="password"/>
      <BodyMedium className="text-right text-sm sm:text-base text-dark-secondary">Lupa Password?</BodyMedium>
      <Button disabled={loading} type="submit">{loading ? "Loading..." : "Masuk"}</Button>
      {message && (
        <span style={{
            color: message.includes("✅") ? "green" : "red",
          }} className="text-center">{message}</span>
      )}
      </form>     
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