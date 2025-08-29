import { useState } from "react"

const product = [
    {
    title : "Title 1",
    category : "Category 1",
    price : "Rp 300K",
    picture : "/assets/desktop1.png"
    },
    {
    title : "Title 2",
    category : "Category 2",
    price : "Rp 300K",
    picture : "/assets/desktop1.png"
    },
    {
    title : "Title 3",
    category : "Category 3",
    price : "Rp 300K",
    picture : "/assets/desktop1.png"
    }
]

const Text = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const categories = ["All", ...new Set(product.map((item) => item.category))]

    const filteredProducts =
    selectedCategory === "All"
    ? product
    : product.filter((item) => item.category === selectedCategory)
    return (
        <div className="flex flex-col">
            {product.map((item, index) => (
                <div key={index}>
                    <p>{item.title}</p>
                    <p>{item.category}</p>
                    <p>{item.price}</p>
                    <img src={item.picture} alt="" />
                </div>
            ))}
            <div className="flex flex-row">
                <ul>
                    {categories.map((item, index) => (
                        <li onClick={() => setSelectedCategory(item) } key={index}>{item}</li>
                    ))}
                </ul>
            </div>
            <div className="flex flex-col">
                {filteredProducts.map((item, index) => (
                    <div key={index}>
                        <p>{item.title}</p>
                        <p>{item.category}</p>
                        <p>{item.price}</p>
                        <img src={item.picture} alt="" />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Text