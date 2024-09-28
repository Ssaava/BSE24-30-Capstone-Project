import {Route, Routes} from 'react-router-dom'
import AuthPage from "@/pages/auth";
import PageNotFound from "@/pages/page-not-found.tsx";
import Base from "@/layouts/base.tsx";

import Home from "@/pages/home.tsx";
import Products from "@/pages/products.tsx";
import Product from "@/pages/product.tsx";
import Wishlist from "@/pages/wishlist.tsx";
import About from "./pages/about";
import ContactUs from "./pages/contactUs";
import Cart from "@/pages/cart.tsx";
import Checkout from "@/pages/checkout.tsx";
const App = ()=>{
    return (
        <Routes>
            <Route path="/" element={<Base />}>
                <Route index element={<Home />} />
                <Route path={"auth"} element={<AuthPage />} />
                <Route path={"products"} element={<Products />} />
                <Route path={"product/:productId"} element={<Product />} />
                <Route path={"wishlist"} element={<Wishlist />} />
                <Route path={"/about"} element={<About />} />
                <Route path={"/cart"} element={<Cart />}/>
                <Route path={"/checkout"} element={<Checkout />} />
                <Route path={"/contact"} element={<ContactUs />} />
                <Route path="*" element={<PageNotFound />} />
            </Route>
        </Routes>
    )
}
export default App;