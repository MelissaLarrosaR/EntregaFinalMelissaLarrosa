import './ItemDetail.css';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';

import { CartContext } from '../../context/CartContext';


const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    const [quantityAdded, setQuantityAdded] = useState(0);

    const { addItem } = useContext(CartContext);

    const handleAdder = (quantity) => {
        setQuantityAdded(quantity);

        const item = {
            id,
            name,
            price,
        }

        addItem(item, quantity);

    }

    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className='ItemHeader'>{name}</h2>
            </header>
            <picture>
                <img className="ItemImg" src={img} alt={name} />
            </picture>
            <section>
                <p className="Info">
                    Categoria: {category}
                </p>
                <p className="Info">
                    Descripción: {description}
                </p>
                <p className="Info">
                    Precio: ${price}
                </p>
            </section>
            <footer className="ItemFooter">
                {
                    quantityAdded > 0 ? (
                        <Link to='/cart' className='Option'>Terminar compra</Link>
                    ) : (
                        <ItemCount initial={1} stock={stock} onAdd={handleAdder} />
                    )
                }
            </footer>
        </article>

    )
}

export default ItemDetail;