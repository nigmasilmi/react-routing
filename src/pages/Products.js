import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <div>
      <h2>Products</h2>
      <ul>
        <li>
          <Link to="/products/book">Book </Link>
        </li>
        <li>
          <Link to="/products/bike">Bike </Link>
        </li>
        <li>
          <Link to="/products/blue-ribbon">Blue ribbon</Link>
        </li>
      </ul>
    </div>
  );
};

export default Products;
