import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';
import Cart from './pages/Cart/Cart';
import Checkout from './pages/Checkout/Checkout';
import { CartProvider } from './context/CartContext';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer greeting={"Bienvenidos a Cultivos Sanos"} />} />
            <Route path="/category/:categoryId" element={<ItemListContainer greeting={"Bienvenidos a Cultivos Sanos"} />} />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<h1>404 - Not Found</h1>} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
