import cart from './assets/cart.png';
import './CartWidget.css';

const CartWidget = () => {
    return (
        <div className="col-2 cart">
            <img className="img-cart" src={cart} alt="cart" />
            0
        </div>
    )
}

export default CartWidget