import { useState } from "react";

import Button from "./Button";
import productsJSON from "../data/products.json";

export default function Products() {
  const [dataProducts, setDataProducts] = useState(productsJSON);

  function addNewProduct() {
    setDataProducts([
      ...dataProducts,
      { id: 3, name: "Sport Sneaker 999", price: 320000 },
    ]);
  }

  return (
    <ul>
      <form>
        <input type="text" name="productName" placeholder="Shoe..." />
        <Button type="submit" onClick={addNewProduct}>
          Add New
        </Button>
      </form>

      {dataProducts.map((product) => {
        return <li key={product.id}>{product.name}</li>;
      })}
    </ul>
  );
}
