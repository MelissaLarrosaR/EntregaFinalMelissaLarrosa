const ItemListContainer = ({ name, price }) => {
    return (
        <div className="col-4 p-3">
            <div className="border border-success">
                <h1>{name}</h1>
                <h2>{price}</h2>
            </div>
        </div>
    )
}

export default ItemListContainer