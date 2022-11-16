import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Product from "./components/product";
import ProductEdit from "./components/product-edit";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<h1>Home Page</h1>} />
                <Route path="products" element={<Product />} />
                <Route path="products/add" element={<h1>Product Add</h1>} />
                <Route path="products/:id/edit" element={<ProductEdit />} />
            </Routes>
        </div>
    );
}

export default App;
