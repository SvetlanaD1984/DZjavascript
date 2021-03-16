import Cart from './cart'

import List from './list'

class CartItem {
    _name = ''
    _price = 0
    counter = 1
 
    constructor ({ name, price }) {
      this._name = name
      this._price = price
    }
  
 render (placeToRender) {
     const block = document.createElement('div')
     block.innerHTML = `Товар: ${this._name} : ${this._price} x ${this.counter}`
     placeToRender.appendChild(block)
   }
 }
 
  
 
  const CartInstane = new Cart()
 new List(CartInstane)