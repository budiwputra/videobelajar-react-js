import api from "./client"

export const getCourse = (params) => 
    api.get("/course", {params}).then((r) => {console.log("getCourse response:", r.data);
    return r.data})
        
export const getCourseById = (id) =>
    api.get(`/course/${id}`).then((r) => r.data)

export const createCourse = (payload) =>
    api.post("/course", payload).then((r) => {console.log("createCourse response:", r.data); 
        return r.data})

export const updateCourse = (id, payload) =>
    api.put(`/course/${id}`, payload).then((r) => {console.log("updateCourse response:", r.data); 
        return r.data})

export const deleteCourse = (id) =>
    api.delete(`/course/${id}`).then((r) => {console.log("deleteCourse response:", r.data);
        return r.data})

