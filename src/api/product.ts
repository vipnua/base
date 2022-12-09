import { AxiosPromise } from 'axios';
import { IProduct } from '../interfaces/product';
import instance from './instance';

export const getProducts = async (): Promise<IProduct[]> => {
    return await instance.get('/products');
}
export const getProduct = async(id:number): Promise<IProduct> =>{
    return await instance.get(`/product/${id}`);
}
export const deleteProduct = async (id:number)=> {
    return await instance.delete(`/products/${id}`);
}
export const updateProduct = async (data:IProduct): Promise<IProduct>=> {
    return await instance.patch(`/products/${data.id}`,data);
}
export const addProduct = async (product: IProduct) => {
    return await instance.post('/products', product);
}