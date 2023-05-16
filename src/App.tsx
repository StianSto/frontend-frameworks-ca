import "./sass/App.scss";

import { Route, Routes } from "react-router-dom";
import Layout from "./components/ui/Layout";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="product/:id" element={<Product />}></Route>
          <Route path="cart" element={<Cart />}></Route>
          <Route path="contact" element={<Contact />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </>
  );
}
