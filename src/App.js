import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar';
import CartProducts from'./components/cartProducts';

class App extends Component {
  state = { 
    products: [
      {'id':1, 'title': 'Coca Cola', 'count': 0},
      {'id':2, 'title': 'Milo', 'count': 0},
      {'id':3, 'title': 'Pepsi', 'count': 0},
      {'id':4, 'title': 'Sprite', 'count': 0},
    ]
   }

   handlerReset =() =>{
    const products = this.state.products.map(product => {
      product.count = 0;
      return product
      })
    this.setState({products: products});    
   }

   handlerIncrement = (product) => {
     const products =[...this.state.products];
     const index = products.indexOf(product);
     products[index] = {...product};
     products[index].count++;
     this.setState({
       products: products
     })

    }

     handlerDecrement = (product) => {
      const products =[...this.state.products];
      const index = products.indexOf(product);
      products[index] = {...product};
      products[index].count--;
      this.setState({
        products: products
      })
    }

    handlerDelete = (product) => {
      const products = this.state.products.filter(prod => prod.id !== product.id)
      this.setState({products:products})
    }
  render() { 
    return ( 
      <React.Fragment>
        <NavBar totalCount={this.state.products.filter(prod => prod.count > 0).length}/>
        <main>
          <CartProducts products={this.state.products} onReset={this.handlerReset} onIncrementQuantity={this.handlerIncrement} onDecrementQuantity={this.handlerDecrement} onDelete={this.handlerDelete}/>
        </main>
      </React.Fragment>
     );
  }
}
 
export default App;

