import { useState, useEffect } from 'react'
import ItemList from '../../components/ItemList/ItemList'
import { useParams } from 'react-router-dom'
import './ItemListContainer.css'

import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from '../../services/firebase/firebaseConfig';

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const { categoryId } = useParams()
    useEffect(() => {
        setLoading(true);

        const collectionRef = categoryId
            ? query(collection(db, "products"), where("category", "==", categoryId))
            : collection(db, "products");

        getDocs(collectionRef)
            .then(response => {
                const productsAdapter = response.docs.map(doc => {
                    const data = doc.data();
                    return { id: doc.id, ...data }; 
                });
            setProducts(productsAdapter);
        })
        .catch(error => {
            console.log(error);
        })
        .finally(() => {
            setLoading(false);
        });
    }, [categoryId]);

    return (
        <div className="ItemListContainer">
            <h1>{greeting}</h1>
            {loading ? <h2>Cargando...</h2> : <ItemList products={products} />}
        </div>
    )
}

export default ItemListContainer