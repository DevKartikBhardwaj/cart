import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../Store/cartSlice";
import { fetchProduct } from "../Store/productSlice";

const Products = () => {
  // const [products, setProducts] = useState([]);
  const products = useSelector((state) => state.product.data);
  // const status = useSelector((state) => state.product.status);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProduct());
    // const fetchProducts = async () => {
    //   try {
    //     const { data } = await axios.get("https://fakestoreapi.com/products");
    //     setProducts(data);
    //   } catch (error) {
    //     console.log(error.message);
    //   }
    // };
    // fetchProducts();
  }, [dispatch]);

  const handleChange = (product) => {
    dispatch(add(product));
  };

  return (
    <div className="productsWrapper">
      {products.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.image} alt="" />
          <h4>{product.title}</h4>
          <h5>${product.price}</h5>
          <button className="btn" onClick={() => handleChange(product)}>
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
