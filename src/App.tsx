import { Route, Routes } from "react-router-dom";
import "./App.css";
import Product from "./components/admin/Product";
import LayoutAdmin from "./layouts/LayoutAdmin";

function App() {
    return <div className="App">
        <Routes>
            <Route path="/admin" element={<LayoutAdmin />}>
                <Route index element={<Product />} />
            </Route>
        </Routes>
    </div>;
}

export default App;
