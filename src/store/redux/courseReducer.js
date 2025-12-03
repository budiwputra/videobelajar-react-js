import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { getCourse, 
    createCourse, 
    updateCourse, 
    deleteCourse, getCourseById } from "../../services/api/course"

export const getData = createAsyncThunk("course/getData", 
    async (params) => {
    return await getCourse(params)})

export const createData = createAsyncThunk("course/createData", 
    async (payload) => {
    return await createCourse(payload)})

export const updateData = createAsyncThunk("course/editData", 
    async ({id, payload}) => {
    return await updateCourse(id, payload)})

export const deleteData = createAsyncThunk("course/deleteData", 
    async (id) => {
    await deleteCourse(id)
    return id })

export const getDataById = createAsyncThunk(
    "course/getCourseById",
    async (id, payload) => {
        return await getCourseById(id, payload)
    }
)

export const courseSlice = createSlice({
    name : "course",
    initialState : {
        value : [],
        courseDetail: null,
        isLoading : false,
        isError : false    
    },
    reducers : {},

    extraReducers : (builder) => {
        builder
        .addCase(getData.pending, (state) => {
            state.isLoading = true
            state.isError = false })

        .addCase(getData.fulfilled, (state, action) => {
            state.isLoading = false
            state.value = action.payload })

        .addCase(getData.rejected, (state) => {
            state.isLoading = false
            state.isError = true })

        .addCase(getDataById.pending, (state) => {
        state.isLoading = true
        })
        .addCase(getDataById.fulfilled, (state, action) => {
            state.isLoading = false
            state.courseDetail = action.payload
            console.log("reducerCourse: ", action.payload)
        })
        .addCase(getDataById.rejected, (state) => {
            state.isLoading = false
            state.isError = true
        })
        .addCase(createData.fulfilled, (state, action) => {
            state.value.push(action.payload)})

        .addCase(updateData.fulfilled, (state, action) => {
        const index = state.value.findIndex(
            item => item.course_id === action.payload.course_id
        )
        if (index !== -1) {
            state.value[index] = action.payload
        }
        })

        .addCase(deleteData.fulfilled, (state, action) => {
        state.value = state.value.filter((item) => item.course_id !== action.payload)})
    },})

export default courseSlice.reducer