import React, { useState, useEffect } from 'react';
import ProductListItem from "../ProductListItem";
import ProductDetails from "../ProductDetails";
import './ProductView.css'

function ProductView({ products }) {

  const [sideOpen, setSideOpen] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    if (selectedProduct) {
      setSideOpen(true);
    }
  }, [selectedProduct]);

  useEffect(() => {
    if (!sideOpen) {
      setSelectedProduct(null);
    }
  }, [sideOpen]);

  return (
    <div className="product-view">
      <div className="product-main-area">
        <h1>Products</h1>
        <div className="product-list">
          {products.map(item =>
            <ProductListItem
              key={item.id}
              product={item}
              onClick={() => {
                setSelectedProduct(item);
              }
            }
              isSelected={selectedProduct && item.id === selectedProduct.id}
            />
          )}
        </div>
      </div>
      <div className="product-side-panel">
        <div className="product-side-panel-toggle-wrapper">
          <div className="product-side-panel-toggle"
               onClick={() => setSideOpen(!sideOpen)}>
            {sideOpen ? '>' : '<'}
          </div>
        </div>
        <ProductDetails visible={sideOpen} product={selectedProduct}/>
      </div>
    </div>
  );
}

export default ProductView;