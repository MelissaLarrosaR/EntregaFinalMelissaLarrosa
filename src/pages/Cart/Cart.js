import './Cart.css'
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import CartItem from '../../components/CartItem/CartItem';

const Cart = () => {
    const { cart, clearCart, totalQuantity, total } = useContext(CartContext);

    if (totalQuantity() === 0) {
        return (
            <div className="emptyCart">
                <h1>No hay productos en el carrito</h1>
                <Link to="/" className="optionButton">
                    Productos
                </Link>
            </div>
        )
    }

    return (
        <div className="cartContainer">
            {cart.map((p) => (
                <CartItem key={p.id} {...p} />
            ))}
            <h2 className="totalAmount mt-5">Total: ${total()}</h2>
            <button onClick={clearCart} className="clearCartButton mt-5">
                Vaciar carrito
            </button>
            <Link to="/checkout" className="checkoutButton mt-2">
                Terminar compra
            </Link>
        </div>
    )

}

export default Cart;