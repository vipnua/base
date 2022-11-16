import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hook";
import { fetchProducts } from "../slice/product";

type Props = {};

const Product = (props: Props) => {
    const dispatch = useAppDispatch();
    const products = useAppSelector((state) => state.products.value);
    useEffect(() => {
        dispatch(fetchProducts());
    }, []);
    return (
        <div>
            {products.map((product) => (
                <div key={product.id}>{product.name}</div>
            ))}
        </div>
    );
};

export default Product;
