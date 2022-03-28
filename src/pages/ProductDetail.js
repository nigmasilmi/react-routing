import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const params = useParams();
  return <div>ProductDetail with id: {params.productId}</div>;
};

export default ProductDetail;
