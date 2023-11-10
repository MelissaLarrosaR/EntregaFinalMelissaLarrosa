import cart from './assets/cart.png'

const CartWidget = () => {
    return(
        <div className="col-1 me-3 cart">
            <img class="img-fluid" src={cart} alt="cart-widget"/>
            <div className="notif">
                0
            </div>
        </div>
    )
}

export default CartWidget