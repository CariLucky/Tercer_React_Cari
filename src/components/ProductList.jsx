import ProductItem from './ProductItem';

function ProductList({ products, onDelete, onEdit }) {
  return (
    <div>
      {products.map(product => (
        <ProductItem
          key={product.id}
          product={product}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}

export default ProductList;