

function App() {
    const products = [
        { id: 1, title: 'Shoes', price: 29.99 },
        { id: 2, title: 'Hat', price: 14.99 },
        { id: 3, title: 'Bag', price: 49.99 },
    ];

    return (
        <div>
            {products.map((product) => (
                <div key={product.id}>
                    <h2>{product.title}</h2>
                    <p>${product.price}</p>
                    <button>Add to Cart</button>
                </div>
            ))}
        </div>
    );
}

export default App;