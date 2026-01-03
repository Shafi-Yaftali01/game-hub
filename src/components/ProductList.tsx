import { useEffect, useState } from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}
const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="container">
      <div className="row">
        {products.map((product: Product) => (
          <div className="col-md-4" key={product.id}>
            <div className="card">
              <img src={product.image} alt={product.title} className="card-img-top" />
            </div>
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">{product.description}</p>
              <p className="card-text">{product.price}</p>
              <p className="card-text">{product.category}</p>
            </div>
            <div className="card-footer">
              <button className="btn btn-primary">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
