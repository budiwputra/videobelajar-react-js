import api from "./client"

export const getProduct = (params) => 
    api.get("/course", {params}).then((r) => r.data.data)

export const getProductById = (id) =>
    api.get(`/course/${id}`).then((r) => r.data.data)

export const createProduct = (payload) =>
    api.post("/course", payload).then((r) => r.data.data)

export const updateProduct = (id, payload) =>
    api.put(`/course/${id}`, payload).then((r) => r.data.data)

export const deleteProduct = (id) =>
    api.delete(`/course/${id}`).then((r) => r.data.data)
