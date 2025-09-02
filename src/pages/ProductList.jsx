import useProductStore from "../store/useProductStore"
import Card from "../components/models/Card"


const ProductList = () => {
    const product = useProductStore((state) => state.product)

    return (
        <div className="h-full p-[36px] ">
        <div className="h-full border border-other-border rounded-sm flex p-[36px]">
            <Card/>
        </div>
        </div>
    )
}
export default ProductList