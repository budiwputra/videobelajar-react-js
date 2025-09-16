import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getProduct, createProduct, updateProduct, deleteProduct } from "../../services/api/product";

export const getData = createAsyncThunk("products/getData", async () => {
    return await getProduct()
})

export const createData = createAsyncThunk("products/createData", async (payload) => {
    return await createProduct(payload)
})

export const updateData = createAsyncThunk("products/editData", async ({id, payload}) => {
    return await updateProduct(id, payload)
})

export const deleteData = createAsyncThunk("products/deleteData", async (id) => {
    await deleteProduct(id)
    return id
})

export const productSlice = createSlice({
    name : "products",
    initialState : [],
    reducers : {},
    extraReducers : (builder) => {
        builder
        .addCase(getData.fulfilled, (state, action) => {
            return action.payload
        })
        .addCase(createData.fulfilled, (state, action) => {
            state.push(action.payload)
        })
        .addCase(updateData.fulfilled, (state, action) => {
            const index = state.findIndex((item) => item.id === action.payload.id)
            if (index !== -1) {
                state[index] = {...state[index], ...action.payload }
            }
        })
        .addCase(deleteData.fulfilled, (state, action) => {
            return state.filter((item) => item.id !== action.payload)
        })
    },
})

export default productSlice.reducer