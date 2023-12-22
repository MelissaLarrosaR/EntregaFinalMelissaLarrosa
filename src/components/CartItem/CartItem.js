import "./CartItem.css"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"


const CartItem = ({ name, price, id, quantity }) => {

  const { removeItem } = useContext(CartContext)


  return (
    <div className="cartItemContainer container row">
      <h2 className="itemName col-12 col-md-4">{name}</h2>
      <p className="itemQuantity col-6 col-md-2">Cantidad: {quantity}</p>
      <p className="itemPrice col-6 col-md-2">Precio por unidad: ${price}</p>
      <p className="itemSubtotal col-6 col-md-2">Subtotal: ${price * quantity}</p>
      <button className="removeButton col-6 col-md-2" onClick={() => removeItem(id)}>
        Eliminar
      </button>
    </div>
  )
}

export default CartItem;