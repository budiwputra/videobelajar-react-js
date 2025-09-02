import useProductStore from "../store/useProductStore"
import { useNavigate } from "react-router"
import { useState } from "react"

const ProductEntry = () => {
    const navigate = useNavigate()
    const setProduct = useProductStore((state) => state.setProduct )
    return (
        <div className="h-full p-[36px] ">
        <div className="h-full border border-other-border rounded-sm bg-gray-300 flex p-[36px]">
            <form onSubmit={(e) => {
                e.preventDefault()
                setProduct({
                    title : e.target.title.value,
                    category : e.target.category.value,
                    desc : e.target.desc.value,
                    price : e.target.price.value
                })
                navigate('/dashboard/product-list')
            }} className="flex flex-col gap-[10px]" action="">
                <label htmlFor="">Title</label>
                <input className="border" name="title" type="text" placeholder="Masukkan Title" />
                <label htmlFor="">Category</label>
                <select className="border" name="category" id="">
                    <option value="Pemasaran">Pemasaran</option>
                    <option value="Desain">Desain Grafis</option>
                    <option value="Pengembangan Diri">Pengembangan Diri</option>
                    <option value="Bisnis Manajemen">Bisnis Manajemen</option>
                    <option value="Digital & Teknologi">Digital & Teknologi</option>
                </select>
                <label htmlFor="">Description</label>
                <textarea className="border" defaultValue="Mulai transformasi dengan instruktur professional, harga yang terjangkau, dan..." name="desc" id="desc"></textarea>
                <label htmlFor="">Price</label>
                <input placeholder="Masukkan harga" className="border" name="price" type="text" />
                <button className="border" type="submit">Submit</button>
            </form>
        </div>
        </div>
    )
}
export default ProductEntry