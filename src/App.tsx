import "./sass/App.scss";

import { Route, Routes } from "react-router-dom";
import Layout from "./components/ui/Layout";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import ContactPage from "./pages/ContactPage";
import CartPage from "./pages/CartPage";
import NotFoundPage from "./pages/NotFoundPage";
import CheckoutSuccessPage from "./pages/CheckoutSuccess";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />}></Route>
        <Route path="product/:id" element={<ProductPage />}></Route>
        <Route path="cart" element={<CartPage />}></Route>
        <Route path="contact" element={<ContactPage />}></Route>
        <Route path="checkout" element={<CheckoutSuccessPage />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Route>
    </Routes>
  );
}
