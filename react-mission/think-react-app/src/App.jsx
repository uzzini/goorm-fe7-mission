import AddProduct from "./components/AddProduct";
import FilterableProductTable from "./components/FilterableProductTable";
import { PRODUCTS } from "./data/products";
import { useState } from "react";

export default function App() {
  const [products, setProducts] = useState(PRODUCTS);

  const handleAddProduct = (category, name, price, stocked) => {
    const newProduct = { category, name, price, stocked };
    const updatedProducts = [...products, newProduct];

    // Fruits 카테고리를 먼저, 나머지를 뒤에 정렬
    const sortedProducts = [
      ...updatedProducts.filter((p) => p.category === "Fruits"),
      ...updatedProducts.filter((p) => p.category !== "Fruits"),
    ];

    setProducts(sortedProducts);
  };

  // 기능 추가 : 아이템 삭제
  const handleDeleteProduct = (product) => {
    setProducts(products.filter(p => p.name !== product.name));
  };

  return (
    <main>
      <AddProduct onAddProduct={handleAddProduct} />
      <FilterableProductTable products={products} onDelete={handleDeleteProduct} />
    </main>
  );
}