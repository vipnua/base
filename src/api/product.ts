import { AxiosPromise } from 'axios';
import { IProduct } from '../interfaces/product';
import instance from './instance';

export const getProducts = async (): Promise<IProduct[]> => {
    return await instance.get('/products');
}
