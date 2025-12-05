import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import { useState } from "react";

export default function FilterableProductTable({ products, onDelete }) {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <div style={{ padding: "20px" }}>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly}
      />
      <ProductTable
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly}
        onDelete={onDelete}
      />
    </div>
  );
}