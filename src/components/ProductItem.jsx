function ProductItem({ product, onDelete, onEdit }) {
  return (
    <div className="product-item">
      <p><strong>ID:</strong> {product.id}</p>
      <p><strong>Descripción:</strong> {product.descripcion}</p>
      <p><strong>Precio Unitario:</strong> ${product.precioUnitario}</p>
      <p><strong>Descuento:</strong> {product.descuento}%</p>
      <p><strong>Precio con Descuento:</strong> ${product.precioConDescuento.toFixed(2)}</p>
      <p><strong>Stock:</strong> {product.stock}</p>
      <button onClick={() => onEdit(product)}>Editar</button>
      <button onClick={() => onDelete(product.id)}>Eliminar</button>
    </div>
  );
}

export default ProductItem;