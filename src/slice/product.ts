import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { addProduct, deleteProduct, getProduct, getProducts, updateProduct } from "../api/product";
import { IProduct } from '../interfaces/product';
import { message } from 'antd';

export const fetchProducts = createAsyncThunk('product/fetchProducts', getProducts);
export const fetchDelete = createAsyncThunk('product/fetchDelete', async(id:number)=>{
    await deleteProduct(id);
    return await getProducts();
});
export const fetchProduct = createAsyncThunk('product/fetchProduct', async(id:number)=>{
    return await getProduct(id);
});
export const fetchUpdate = createAsyncThunk('product/update',async(data:IProduct)=>{
    await updateProduct(data);
    return await getProducts()
})
export const fetchAdd = createAsyncThunk('product/add',async(data:IProduct)=>{
    await addProduct(data).then((res) => res)
    .then((data) => {
       if(data){
        alert('add thanh cong')
       }
    })
    .catch((err) => {
        alert(err.message)
    });;
    return await getProducts();
})
const initialState: { value: IProduct[]} = {
    value: [],
}
const ProductSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled,(state,action: PayloadAction<IProduct[]>)=>{            
            state.value = action.payload
        }),
        builder.addCase(fetchDelete.fulfilled,(state,action)=>{
            console.dir(action)
            state.value = action.payload
        }),
        builder.addCase(fetchUpdate.fulfilled,(state,action)=>{
            state.value = action.payload
        }),
        builder.addCase(fetchProduct.fulfilled,(state,action: PayloadAction<IProduct>)=>{
            state.value = action.payload
        })
        builder.addCase(fetchAdd.fulfilled,(state,action)=>{
            console.log(state.value);
            state.value = action.payload
        })

    }
})

export default ProductSlice.reducer;

