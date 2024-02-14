
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Categoryes from "./components/Categoryes";
import About from "./components/About";
import Footer from "./components/Footer";
import ProductsPage from "./components/Products-p";
import CartPage from "./components/Cart-p";
import { Route, Routes } from "react-router-dom";
import ContactPage from "./components/Contact-p";
import ShopPage from "./components/Shop-p";

function App() {
  return (
    <div className="App">
      <Navbar/>
      
      <Routes>
        <Route path="/" element={<>
        <Landing/>
        <Categoryes/>
        <About/>
        </>}/>

        <Route path="/products" element={<ProductsPage/>}/>

        <Route path="/cart" element={<CartPage/>}/>

        <Route path="/contact" element={<ContactPage/>}/>

        <Route path="/shop" element={<ShopPage/>}/>

      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
