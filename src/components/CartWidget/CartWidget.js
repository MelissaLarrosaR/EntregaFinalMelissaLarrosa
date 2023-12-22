import cart from './assets/cart.png';
import './CartWidget.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext);
    return (
        <Link to='/cart' className='CartWidget col-2 cart' style={{ display: totalQuantity() > 0 ? 'block' : 'none' }}>
            <img className='img-cart' src={cart} alt='Cart' />   
            <span>{totalQuantity()}</span>
        </Link>
    )
}
export default CartWidget