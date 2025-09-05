import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useProductStore = create(persist((set) => ({
    product : [
        {
            id : "3",
            title : "Big 4 Auditor Financial Analyst",
            category : "Pemasaran",
            desc : "Mulai transformasi dengan instruktur professional, harga yang terjangkau, dan program latihan yang disesuaikan dengan kebutuhan Anda",
            price : "Rp 300K"
        },
        {
            id : "2",
            title : "Big 4 Auditor Financial Analyst",
            category : "Desain Grafis",
            desc : "Mulai transformasi dengan instruktur professional, harga yang terjangkau, dan program latihan yang disesuaikan dengan kebutuhan Anda",
            price : "Rp 300K"
        },
        {
            id : "1",
            title : "Big 4 Auditor Financial Analyst",
            category : "Pengembangan Diri",
            desc : "Mulai transformasi dengan instruktur professional, harga yang terjangkau, dan program latihan yang disesuaikan dengan kebutuhan Anda",
            price : "Rp 300K"
        }
        
    ],
    lastId : 3,
    setProduct : (data) => set((state) => {
        const newId = String(state.lastId + 1)
        return {
            product : [{id: newId, ...data}, ...state.product],
            lastId: state.lastId + 1
        }
    }),
    updateProduct : (ids, data) => set((state) => {
        const newData =state.product.map((item) => item.id === ids ? {...item, ...data} : item)
        return {
            product : newData
        }
    })
}), {
    name : 'product',
    storage : createJSONStorage( () => localStorage)
}))

export default useProductStore