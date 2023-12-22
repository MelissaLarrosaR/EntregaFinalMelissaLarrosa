import './ItemDetailContainer.css'
import { useState, useEffect } from 'react';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

import { getDoc, doc } from "firebase/firestore";
import { db } from '../../services/firebase/firebaseConfig';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(false);
    const { itemId } = useParams();

    useEffect(() => {
        setLoading(true);

        const docRef = doc(db, 'products', itemId);

        getDoc(docRef)
            .then((response) => {
                if (response.exists()) {
                    const data = response.data();
                    const productAdapter = { id: response.id, ...data };
                    setProduct(productAdapter);
                } else {
                    console.log("No se encontró el documento");
                }
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [itemId]);

    return (
        <div className="ItemDetailContainer">
            {/* const ItemDetail = ({ id, name, img, category, description, price, stock }) => { */}
            {loading ? <h2>Cargando...</h2> : <ItemDetail {...product} />}
        </div>
    )
}

export default ItemDetailContainer;