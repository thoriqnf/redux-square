import React from "react";
import { connect } from "react-redux";
import { counterPlus, counterMinus } from "../../redux/Actions/counter.actions";

function Counter(props) {
  console.log(props);
  const handlePlusCart = () => {
    console.log("plus clik");
    props.counterPlus();
  };

  const handleMinusCart = () => {
    console.log("minus clik");
    props.counterMinus();
  };

  return (
    <div>
      <button onClick={handlePlusCart}>Tambah</button>
      {props.cart}
      <button onClick={handleMinusCart}>Kurang</button>
    </div>
  );
}

const mapStateToProps = (props) => {
  return {
    cart: props.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    counterPlus: () => dispatch(counterPlus()),
    counterMinus: () => dispatch(counterMinus()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
