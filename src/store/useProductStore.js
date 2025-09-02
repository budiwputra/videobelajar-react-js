import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useProductStore = create(persist((set) => ({
    product : [{
        title : 'Big 4 Auditor Financial Analyst',
        category : 'Pemasaran',
        desc : 'Mulai transformasi dengan instruktur professional, harga yang terjangkau, dan...',
        price : 'Rp 300K'     
        },
        {
        title : 'Big 4 Auditor Financial Analyst',
        category : 'Desain Grafis',
        desc : 'Mulai transformasi dengan instruktur professional, harga yang terjangkau, dan...',
        price : 'Rp 300K'      
        },
        {
        title : 'Big 4 Auditor Financial Analyst',
        category : 'Pengembangan Diri',
        desc : 'Mulai transformasi dengan instruktur professional, harga yang terjangkau, dan...',
        price : 'Rp 300K'      
        }
    ],
    setProduct : (data) => set((state) => ({product : [data, ...state.product]}))
}), {
    name : 'product',
    storage : createJSONStorage( () => localStorage)
}))

export default useProductStore