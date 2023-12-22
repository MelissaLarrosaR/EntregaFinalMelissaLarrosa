import { Timestamp, getDocs, query } from "firebase/firestore";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { db } from "../../services/firebase/firebaseConfig";
import { collection, addDoc, where, documentId } from "firebase/firestore";
import { writeBatch } from "firebase/firestore";
import CheckoutForm from "../../components/CheckoutForm/CheckoutForm";
import CartItem from "../../components/CartItem/CartItem";




const Checkout = () => {
    const [loading, setLoading] = useState(false);
    const [ordenId, setOrdenId] = useState('');

    const { cart, total, clearCart } = useContext(CartContext);

    const createOrder = async ({ name, phone, email }) => {
        setLoading(true);

        try{
            const objOrder = {
                buyer: { 
                    name, phone, email 
                },
                items: cart,
                total: total(),
                date: Timestamp.fromDate(new Date())
            };
            const batch = writeBatch(db);
            const outOfStock = [];
            const ids = cart.map(prod => prod.id);
            const productsRef = collection(db, 'products');
            const productsAddedFormFirestone = await getDocs(query(productsRef, where(documentId(), 'in', ids)));
            const { docs } = productsAddedFormFirestone;
            docs.forEach(doc => {
                const dataDoc = doc.data();
                const stockDb = dataDoc.stock;
                const productAddedToCart = cart.find(prod => prod.id === doc.id);
                const prodQuantity = productAddedToCart?.quantity;
                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity });
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc });
                }
            });
            if (outOfStock.length === 0) {
                await batch.commit();
                const orderRef = collection(db, 'orders');
                const orderAdded = await addDoc(orderRef, objOrder);
                setOrdenId(orderAdded.id);
                clearCart();
            } else {
                console.error('Algunos productos no tienen stock suficiente');
            }
        }catch(error){
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    if (loading) {
        return <h1>Se está procesando tu orden...</h1>
    }

    if (ordenId) {
        return (
            <div>
                <h1>Gracias por tu compra!</h1>
                <h2>El id de tu orden es {ordenId}</h2>
            </div>
        )
    }

    return (
        <div  className="cartContainer">
            <h1>Checkout</h1>
            {cart.map((p) => (
                <CartItem key={p.id} {...p} />
            ))}
            
            <CheckoutForm onConfirm={createOrder} />
        </div>
    )


}

export default Checkout;