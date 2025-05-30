import { useState, useEffect } from "react";

export default function EcommerceApp() {
  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const filteredProducts = products.filter((product) => {
    return (
      (selectedCategory === "all" || product.category === selectedCategory) &&
      product.title.toLowerCase().includes(searchText.toLowerCase())
    );
  });

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <div className="flex gap-4 mb-4">
        <select
          className="p-2 border rounded-md"
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="all">All Categories</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">Women's Clothing</option>
          <option value="jewelery">Jewelry</option>
          <option value="electronics">Electronics</option>
        </select>
        <input
          type="text"
          className="p-2 border rounded-md flex-1"
          placeholder="Search products..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredProducts.map((product) => (
          <div key={product.id} className="border rounded-lg p-4 shadow-md">
            <img
              src={product.image}
              alt={product.title}
              className="h-40 mx-auto"
            />
            <h2 className="text-lg font-bold mt-2">{product.title}</h2>
            <p className="text-gray-700">${product.price}</p>
            <button className="mt-2 p-2 bg-blue-500 text-white rounded-md w-full">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
