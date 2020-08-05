import React from "react";
import Counter from "./component/Counter";
import { connect } from "react-redux";

function Product(props) {
  console.log(props);
  return (
    <div>
      <p>Halaman Product</p>
      <p>Total keranjang anda: {props.cart}</p>
      <Counter />
    </div>
  );
}
const mapStateToProps = (props) => {
  return {
    cart: props.cart,
  };
};
export default connect(mapStateToProps)(Product);
