import { useState } from 'react';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    if (!query) return;
    try {
      const response = await fetch(`https://fakestoreapi.com/products`);
      const products = await response.json();
      const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filteredProducts);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  return (
    <div style={{ marginTop: '1rem' }}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a product..."
        style={{ padding: '0.5rem', width: '70%', borderRadius: '5px', marginRight: '0.5rem' }}
      />
      <button
        onClick={handleSearch}
        style={{ padding: '0.5rem 1rem', backgroundColor: 'black', color: 'white', borderRadius: '5px' }}
      >
        Search
      </button>

      <div style={{ marginTop: '1rem' }}>
        {results.length > 0 ? (
          <ul>
            {results.map((product) => (
              <li key={product.id}>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <p>Price: ${product.price}</p>
              </li>
            ))}
          </ul>
        ) : (
          query && <p>No products found.</p>
        )}
      </div>
    </div>
  );
}
