import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Navbar = () => {
  // const counter=
  // const [count, setCount] = useState(0);
  const items = useSelector((state) => state.cart);
  // setCount(cartArr.length);
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <span className="logo">REDUX STORE</span>
      <div>
        <Link to={"/"} className="navLink">
          Home
        </Link>
        <Link to={"/cart"} className="navLink">
          Cart
        </Link>
        <span className="cartCount">Cart items : {items.length}</span>
      </div>
    </div>
  );
};

export default Navbar;
