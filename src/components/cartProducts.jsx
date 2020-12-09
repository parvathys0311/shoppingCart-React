import React, { Component } from "react";
import CartProduct from "./cartProduct";

class CartProducts extends Component {
  render() {
    const {
      onIncrementQuantity,
      onDecrementQuantity,
      onDelete,
      onReset,
    } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-sm btn-primary  m-2 mt-4 ">
          Reset
        </button>
        {this.props.products.map((product) => (
          <CartProduct
            product={product}
            onIncrementQuantity={onIncrementQuantity}
            onDecrementQuantity={onDecrementQuantity}
            onDelete={onDelete}
          />
        ))}
      </div>
    );
  }
}

export default CartProducts;
