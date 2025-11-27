import { useNavigate, useParams } from "react-router"
import { useEffect, useRef } from "react"
import Button from "../components/elements/Button"
import BodyRegular from "../components/elements/BodyRegular"
import InputText from "../components/elements/InputText"
import SelectOption from "../components/elements/SelectOption"
import TextArea from "../components/elements/TextArea"

import { createData, updateData} from "../store/redux/courseReducer"
import { useSelector, useDispatch } from "react-redux"

const ReduxEntry = ({isUpdate}) => {
    const {id} = useParams()
    const formRef = useRef()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {data : course} = useSelector((state) => state.course)

    useEffect(() => {
        if (isUpdate) {
            const productItem = course.find(item => item.course_id === id)
            formRef.current.title.value = productItem.title,
            formRef.current.category.value = productItem.category,
            formRef.current.desc.value = productItem.description,
            formRef.current.price.value = productItem.price,
            formRef.current.language.value = productItem.language
        } else {
            if (formRef.current) formRef.current.reset()
        }
    }, [isUpdate, id, course])

    const optionCategory = [
    {
        label : "Pemasaran",
        value : "Pemasaran"
    },
    {
        label : "Desain Grafis",
        value : "Desain"
    },
    {
        label : "Pengembangan Diri",
        value : "Pengembangan"
    },
    {
        label : "Bisnis Manajemen",
        value : "Bisnis"
    },
    {
        label : "Digital & Teknologi",
        value : "Digital"
    }]

    return (

        <div className="h-full p-[36px]">
            <div className="h-full rounded-sm p-[36px]">
                <div className="sm:w-[590px] flex flex-col gap-[20px]">
                    <form ref={formRef} className="flex flex-col gap-[20px]" action=""
                    onSubmit={(e) => {
                        e.preventDefault()
                        if (isUpdate) {
                            dispatch(updateData({id, payload : {
                                title : e.target.title.value,
                                category : e.target.category.value,
                                description : e.target.desc.value,
                                price : e.target.price.value,
                                language : e.target.language.value
                            }}))
                        } else {
                            dispatch(createData({
                                title : e.target.title.value,
                                category : e.target.category.value,
                                description : e.target.desc.value,
                                price : e.target.price.value,
                                language : e.target.language.value
                            }))                     
                        }
                        navigate("/dashboard/redux-list")
                    }}
                    >
                        <BodyRegular>Title</BodyRegular>
                        <InputText name="title" placeholder="Masukkan title" />
                        <BodyRegular>Category</BodyRegular>
                        <SelectOption name="category" id="category">
                            {optionCategory.map((item, index) => (
                                <option key={index} value={item.value} label={item.label}></option>
                            ))}
                        </SelectOption>
                        <BodyRegular>Description</BodyRegular>
                        <TextArea name="desc" id="desc"/>
                        <BodyRegular>Price</BodyRegular>
                        <InputText name="price" placeholder="Masukkan Harga"/>
                        <BodyRegular>Language</BodyRegular>
                        <InputText name="language" placeholder="Masukkan Bahasa"/>
                        <Button type="submit">{isUpdate ? "Update" : "Submit"}</Button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ReduxEntry