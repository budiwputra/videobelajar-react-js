import BodyLarge from "../components/elements/BodyLarge"
import BodyRegular from "../components/elements/BodyRegular"
import HeadingSemiBold from "../components/elements/HeadingSemiBold"
import BodySemiLarge from "../components/elements/BodySemiLarge"
import InputText from "../components/elements/InputText"
import InputPassword from "../components/elements/InputPassword"
import iconProfile from "../assets/pfofilicon.png"
import iconBook from "../assets/book.png"
import iconShopping from "../assets/shoppingbasket.png"
import profilePic from "../assets/ava.png"
import Button from "../components/elements/Button"

import { fetchMe, updateUserData } from "../store/redux/userReducer"
import { useEffect, useRef } from "react"
import { useSelector, useDispatch } from "react-redux"

const Profile = () => {

    const formRef = useRef(null)
    const dispatch = useDispatch()

    const { currentUser, isLoading, isError } = useSelector((state) => state.user)

    useEffect(() => {
    dispatch(fetchMe())
    }, [dispatch])

    useEffect(() => {
    if (!currentUser || !formRef.current) return
    console.log("data currentuser:", currentUser)
    formRef.current.fullName.value = currentUser.fullname || ""
    formRef.current.email.value = currentUser.email || ""
    formRef.current.gender.value = currentUser.gender || ""
    formRef.current.country.value = currentUser.country || ""
    formRef.current.phone.value = currentUser.phone || ""
    formRef.current.password.value = ""
    formRef.current.verification.value = ""

    }, [currentUser])


    const handleSubmit = (e) => {
    e.preventDefault()
    
    const password = e.target.password.value
    const verification = e.target.verification.value

    if (!password) {
    return alert("Password wajib diisi")
    }

    if (password !== verification) {
    return alert("Password tidak sama")
    }

    const payload = {
    fullName: e.target.fullName.value,
    email: e.target.email.value,
    gender: e.target.gender.value,
    country: e.target.country.value,
    phone: e.target.phone.value,
    password: password 
    };

    dispatch(updateUserData({ id: currentUser.user_id, payload }))
        .unwrap()
        .then(() => {
        dispatch(fetchMe())
        })
    }

    return (
        <div className="flex flex-col sm:grid sm:grid-cols-[30%_auto] py-[28px] px-[20px] sm:py-[64px] sm:px-[120px] gap-[24px] sm:gap-[36px] bg-background">
            <div className=" flex flex-col gap-[24px]">
                <div className="flex flex-col gap-[10px]">
                    <HeadingSemiBold size="profile" className="text-left">Ubah Profil</HeadingSemiBold>
                    <BodyRegular>Ubah data diri Anda</BodyRegular>
                </div>
                <div className="border rounded-[10px] border-other-border p-[24px] bg-white gap-[8px] flex flex-col">
                    <button className="flex flex-row gap-[12px] p-[12px] border border-secondary rounded-[4px] justify-start w-full">
                        <img src={iconProfile} alt="Profile" />
                            <BodyLarge className="text-lg text-dark-disabled">Profil Saya</BodyLarge>
                    </button>
                    <button className="flex flex-row gap-[12px] p-[12px] justify-start w-full">
                        <img src={iconBook} alt="Profile" />
                            <BodyLarge className="text-lg text-dark-disabled">Kelas Saya</BodyLarge>
                    </button>
                    <button className="flex flex-row gap-[12px] p-[12px] justify-start w-full">
                        <img src={iconShopping} alt="Profile" />
                            <BodyLarge className="text-lg text-dark-disabled">Pesanan Saya</BodyLarge>
                    </button>
                </div>
            </div>
            {isLoading && <p>Loading...</p>}
            {isError && <p>Error</p>}
            {!isLoading && !isError && (
            <div className="bg-white p-[24px] border border-other-border rounded-[10px] flex flex-col gap-[24px]">
                <div className="flex flex-row justify-start items-center gap-[16px]">
                    <img className="w-[60px] sm:w-[92px] rounded-[4px] aspect-square" src={profilePic} alt="Profile" />
                    <div className="flex flex-col justify-start items-start gap-0 sm:gap-[8px]">
                        <HeadingSemiBold name="fullnameProfile" size="profileName" className="text-dark-primary">{currentUser?.fullname}</HeadingSemiBold>
                        <span name="emailProfile" className="font-normal leading-[140%] tracking-[0.2px] text-base sm:text-lg text-dark-primary">{currentUser?.email}</span>
                        <button><BodySemiLarge className="cursor-pointer text-sm sm:text-base text-tertiary-default">Ganti Foto Profil</BodySemiLarge></button>
                    </div>
                </div>

                    <div className="h-px bg-other-border mb-1.5"></div>

                <div className="flex flex-col gap-[24px]">
                    
                        <form ref={formRef} className="flex flex-col sm:flex sm:flex-row sm:flex-wrap gap-[18px]"
                        onSubmit={handleSubmit} action="">
                        <div className="relative sm:w-1/3">
                            <label className="absolute top-0 -translate-y-4 whitespace-nowrap bg-white p-1 translate-x-3 text-sm text-dark-secondary" htmlFor="Nama">Nama Lengkap</label>
                            <InputText name="fullName" className="py-[13] px-[15px] text-dark-primary" />
                        </div>

                        <div className="relative sm:w-1/4">
                            <label className="absolute top-0 -translate-y-4 whitespace-nowrap bg-white p-1 translate-x-3 text-sm text-dark-secondary" htmlFor="Nama">E-Mail</label>
                            <InputText name="email" className="py-[13] px-[15px] text-dark-primary" />
                        </div>


                        <div className="grid grid-cols-[auto_auto] gap-[16px] sm:w-1/3 justify-between">
                            <select className="border border-other-border text-sm sm:text-base font-normal leading-[140%] tracking-[0.2px]
        rounded-md px-[10px] py-[10px] w-full" name="country" id="country">
                                <option value="+62">+62</option>
                            </select>

                            <div className="relative">
                            <label className="absolute top-0 -translate-y-4 whitespace-nowrap bg-white p-1 translate-x-3 text-sm text-dark-secondary" htmlFor="Nama">No. Hp</label>
                            <InputText name="phone" className="py-[10px] px-[15px] text-dark-primary"/>
                            </div>
                        </div>

                        <div className="relative sm:w-1/4">
                                <label className="absolute top-0 -translate-y-4 whitespace-nowrap bg-white p-1 translate-x-3 text-sm text-dark-secondary z-10" htmlFor="Nama">Jenis Kelamin</label>
                                <select name="gender" id="gender" className="border border-other-border text-sm sm:text-base font-normal leading-[140%] tracking-[0.2px]
        rounded-md px-[10px] py-[10px] w-full">
                                    <option value="Pria">Pria</option>
                                    <option value="Wanita">Wanita</option>
                                </select>

                        </div>
                            <div className="relative sm:w-1/3 ">
                                <label className="absolute top-0 -translate-y-4 whitespace-nowrap bg-white p-1 translate-x-3 text-sm text-dark-secondary z-10" htmlFor="Nama">Password</label>
                                <InputPassword name="password" className="py-[13px] px-[15px] text-dark-primary"/>
                            </div>

                        <div className="relative sm:w-1/3 ">
                            <label className="absolute top-0 -translate-y-4 whitespace-nowrap bg-white p-1 translate-x-3 text-sm text-dark-secondary z-10" htmlFor="Nama">Konfirmasi Password</label>
                            <InputPassword name="verification" className="py-[13px] px-[15px] text-dark-primary"/>
                        </div>   
                    <div className="flex justify-end sm:mx-4 w-full">
                    <Button type="submit" className="w-full sm:w-fit py-[7px] sm:py-[10px] sm:px-[26px]">Simpan</Button>
                    </div>

                        </form>
                    
                </div>  
            </div>
            )}
        </div>
    )
}

export default Profile