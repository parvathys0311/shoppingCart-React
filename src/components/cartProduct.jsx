import React, { Component } from "react";

class cartProduct extends Component {
  styles = {
    display: "flex",
    margin: 2,
    marginTop: 7,
  };

  width = {
    width: 100,
  };

  render() {
    const {
      onIncrementQuantity,
      onDecrementQuantity,
      onDelete,
      product,
    } = this.props;
    return (
      <div style={this.styles} className="row">
        <p style={this.width} className="m-2">
          {this.props.product.title}
        </p>
        <p className="m-2 mr-4">{product.count}</p>
        <button
          className="btn btn-sm btn-info m-2"
          onClick={() => onIncrementQuantity(product)}
        >
          +
        </button>
        <button
          className="btn btn-sm btn-secondary m-2"
          onClick={() => onDecrementQuantity(product)}
        >
          -
        </button>
        <button
          className="btn btn-sm btn-danger m-2"
          onClick={() => onDelete(product)}
        >
          Remove
        </button>
      </div>
    );
  }
}

export default cartProduct;
