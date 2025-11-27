import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCourse, 
    createCourse, 
    updateCourse, 
    deleteCourse } from "../../services/api/course";

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

export const courseSlice = createSlice({
    name : "course",
    initialState : {
    data: [],       // course list
    total: 0,
    totalPages: 0,
    currentPage: 1,
    isLoading: false,
    isError: false,
    },
    reducers : {},

    extraReducers : (builder) => {
        builder
        .addCase(getData.pending, (state) => {
            state.isLoading = true
            state.isError = false })

        .addCase(getData.fulfilled, (state, action) => {
            const { data, total, totalPages, currentPage } = action.payload;
            state.data = data;
            state.total = total;
            state.totalPages = totalPages;
            state.currentPage = currentPage;
            state.isLoading = false;
        })

        .addCase(getData.rejected, (state) => {
            state.isLoading = false
            state.isError = true })

        .addCase(createData.fulfilled, (state, action) => {
            state.data.push(action.payload)})

        .addCase(updateData.fulfilled, (state, action) => {
            const index = state.data.findIndex((item) => item.id === action.payload.id)
            if (index !== -1) {
                state.data[index] = {...state.data[index], ...action.payload }}})
        .addCase(deleteData.fulfilled, (state, action) => {
        state.data = state.data.filter((item) => item.id !== action.payload)})
    },})

export default courseSlice.reducer