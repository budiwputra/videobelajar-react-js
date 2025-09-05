import useProductStore from "../store/useProductStore"
import { useNavigate, useParams } from "react-router"
import { useRef, useEffect } from "react"

const ProductEntry = ({isEdit}) => {
    const navigate = useNavigate()
    const {id} = useParams()
    const formRef = useRef(null)
    const product = useProductStore((state) => state.product)
    const setProduct = useProductStore((state) => state.setProduct)
    const updateProduct = useProductStore((state) => state.updateProduct)

    const optionCategory = [
    {
    label : "Pemasaran",
    value : "Pemasaran"    
    }, 
    {
    label : "Desain Grafis",
    value : "Desain Grafis"    
    }, 
    {
    label : "Pengembangan Diri",
    value : "Pengembangan Diri"    
    }, 
    {
    label : "Bisnis Manajemen",
    value : "Bisnis Manajemen"    
    }, 
    {
    label : "Digital & Teknologi",
    value : "Digital & Teknologi"    
    }
    ]

    console.log("Params", id)
    console.log(product)

    
    useEffect(() => {
        if (isEdit) {
            const productItem = product.find(item => item.id === id)
            console.log("item",productItem.id)

            formRef.current.title.value = productItem.title,
            formRef.current.category.value = productItem.category,
            formRef.current.desc.value = productItem.desc,
            formRef.current.price.value = productItem.price
            
        }
    }, [])

    return (
        <div className="h-full p-[36px] ">
        <div className="h-full border border-other-border rounded-sm bg-gray-300 flex p-[36px]">
            <form ref={formRef} onSubmit={(e) => {
                e.preventDefault()
                if (isEdit) {
                    updateProduct(id, {
                    title : e.target.title.value,
                    category : e.target.category.value,
                    desc : e.target.desc.value,
                    price : e.target.price.value
                    })

                } else {
                    setProduct({
                    title : e.target.title.value,
                    category : e.target.category.value,
                    desc : e.target.desc.value,
                    price : e.target.price.value
                })
                }
                navigate('/dashboard/product-list')
            }} className="flex flex-col gap-[10px]" action="">
                <label htmlFor="">Title</label>
                <input className="border" name="title" type="text" placeholder="Masukkan Title" />
                <label htmlFor="">Category</label>

                <select className="border" name="category" id="">
                    {optionCategory.map((item, index) => (
                        <option key={index} label={item.label} value={item.value}></option>
                    ))}
                </select>

                <label htmlFor="">Description</label>
                <textarea className="border" 
                defaultValue="Mulai transformasi dengan instruktur professional, harga yang terjangkau, dan program latihan yang disesuaikan dengan kebutuhan Anda" name="desc" id="desc"></textarea>
                <label htmlFor="">Price</label>
                <input placeholder="Masukkan harga" className="border" name="price" type="text" />
                <button className="border" type="submit">{isEdit ? "Update" : "Submit"}</button>
            </form>
        </div>
        </div>
    )
}
export default ProductEntry