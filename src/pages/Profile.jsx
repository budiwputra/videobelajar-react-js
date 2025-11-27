import BodyLarge from "../components/elements/BodyLarge"
import BodyRegular from "../components/elements/BodyRegular"
import HeadingSemiBold from "../components/elements/HeadingSemiBold"
import BodySemiLarge from "../components/elements/BodySemiLarge"
import SelectOption from "../components/elements/SelectOption"
import InputText from "../components/elements/InputText"
import InputPassword from "../components/elements/InputPassword"
import InputNumber from "../components/elements/InputNumber"
import iconProfile from "../assets/pfofilicon.png"
import iconBook from "../assets/book.png"
import iconShopping from "../assets/shoppingbasket.png"
import profilePic from "../assets/ava.png"
import Button from "../components/elements/Button"

import {updateUserData} from "../store/redux/userReducer"
import { useSelector, useDispatch } from "react-redux"

const Profile = () => {

    const {data : user} = useSelector((state) => state.user)

    const profileData = user.find(item => item.user_id === 'A')

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
            <div className="bg-white p-[24px] border border-other-border rounded-[10px] flex flex-col gap-[24px]">
                <div className="flex flex-row justify-start items-center gap-[16px]">
                    <img className="w-[60px] sm:w-[92px] rounded-[4px] aspect-square" src={profilePic} alt="Profile" />
                    <div className="flex flex-col justify-start items-start gap-0 sm:gap-[8px]">
                        <HeadingSemiBold size="profileName" className="text-dark-primary">Giyu Tomioka</HeadingSemiBold>
                        <span className="font-normal leading-[140%] tracking-[0.2px] text-base sm:text-lg text-dark-primary">tomiokagiyu@gmail.com</span>
                        <button><BodySemiLarge className="cursor-pointer text-sm sm:text-base text-tertiary-default">Ganti Foto Profil</BodySemiLarge></button>
                    </div>
                </div>

                    <div className="h-px bg-other-border mb-1.5"></div>

                <div className="flex flex-col gap-[24px]">
                    <div className="flex flex-col sm:grid sm:grid-cols-[auto_auto_auto] gap-[16px]">

                        <div className="relative">
                            <label className="absolute top-0 -translate-y-4 whitespace-nowrap bg-white p-1 translate-x-3 text-sm text-dark-secondary" htmlFor="Nama">Nama Lengkap</label>
                            <InputText className="py-[13] px-[15px] text-dark-primary" />
                        </div>

                        <div className="relative">
                            <label className="absolute top-0 -translate-y-4 whitespace-nowrap bg-white p-1 translate-x-3 text-sm text-dark-secondary" htmlFor="Nama">E-Mail</label>
                            <InputText className="py-[13] px-[15px] text-dark-primary" />
                        </div>

                        <div className="relative">
                                <label className="absolute top-0 -translate-y-4 whitespace-nowrap bg-white p-1 translate-x-3 text-sm text-dark-secondary z-10" htmlFor="Nama">Jenis Kelamin</label>
                                <SelectOption>
                                    <option value="Pria">Pria</option>
                                    <option value="Wanita">Wanita</option>
                                </SelectOption>  
                        </div>

                        <div className="flex flex-row gap-[16px] justify-between sm:hidden">

                                <SelectOption className="px-[12px] sm:inline border border-other-border rounded-[6px]">
                                    <option value="Indonesia">+62</option>
                                </SelectOption>  

                            <div className="relative w-full">
                            <label className="absolute top-0 -translate-y-4 whitespace-nowrap bg-white p-1 translate-x-3 text-sm text-dark-secondary" htmlFor="Nama">No. Hp</label>
                            <InputText className="py-[13px] px-[15px] text-dark-primary"/>
                            </div>
                        </div>

                            <div className="relative sm:hidden">
                                <label className="absolute top-0 -translate-y-4 whitespace-nowrap bg-white p-1 translate-x-3 text-sm text-dark-secondary z-10" htmlFor="Nama">Password</label>
                                <InputPassword className="py-[13px] px-[15px] text-dark-primary"/>
                            </div>

                        <div className="relative sm:hidden">
                            <label className="absolute top-0 -translate-y-4 whitespace-nowrap bg-white p-1 translate-x-3 text-sm text-dark-secondary z-10" htmlFor="Nama">Konfirmasi Password</label>
                            <InputPassword className="py-[13px] px-[15px] text-dark-primary"/>
                        </div>   

                    </div>
                    <div className="hidden sm:grid sm:grid-cols-[auto_auto_auto] gap-[16px]">

                        <div className="flex flex-row justify-between gap-[16px]">
                            <SelectOption className="hidden px-[12px] sm:inline border border-other-border rounded-[6px]">
                                <option>+62</option>
                            </SelectOption>
                            <div className="relative w-full">
                                <label className="absolute top-0 -translate-y-4 whitespace-nowrap bg-white p-1 translate-x-3 text-sm text-dark-secondary" htmlFor="Nama">No. Hp</label>
                                <InputNumber className="py-[13] px-[15px] text-dark-primary" />
                            </div>
                        </div>

                            <div className="relative">
                                <label className="absolute top-0 -translate-y-4 whitespace-nowrap bg-white p-1 translate-x-3 text-sm text-dark-secondary z-10" htmlFor="Nama">Password</label>
                                <InputPassword className="py-[13px] px-[15px] text-dark-primary"/>
                            </div>
                        <div className="relative">
                            <label className="absolute top-0 -translate-y-4 whitespace-nowrap bg-white p-1 translate-x-3 text-sm text-dark-secondary z-10" htmlFor="Nama">Konfirmasi Password</label>
                            <InputPassword className="py-[13px] px-[15px] text-dark-primary"/>
                        </div>                      
                    </div>
                    <div className="flex justify-end">
                    <Button className="w-full sm:w-fit py-[7px] sm:py-[10px] sm:px-[26px]">Simpan</Button>
                    </div>
                </div>  
            </div>
        </div>
    )
}

export default Profile