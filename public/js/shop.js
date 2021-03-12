class List {
  _items = []
  
  constructor (CartInstane) {
    this.fetchGoods()
    .then(res => {
      return res.json()
    })
    .then(data => {
      const goods = data.data.map(item => {
        return new GoodItem(item, CartInstane)
    })

    this._items = goods
    this.render()
    })
}

  fetchGoods () {

    const url = 'http://localhost:3000/database/items.json';
    return fetch(url);
  }
    
    

  render () {
    this._items.forEach(Good => {
      Good.render()
    })
  }
}

class GoodItem {
  _name = ''
  _price = 0
  _img = 0
  _CartInstane = null

  constructor ({ name, price, img }, CartInstane) {
    this._name = name
    this._price = price
    this._img = img
    this._CartInstane = CartInstane
  }

  addToCart () {
    this._CartInstane.add(this)
    console.log('Added!', this._name)
  }

  render () {
    const placeToRender = document.querySelector('.goods-list')
    if (placeToRender) {
      const block = document.createElement('div')
      block.innerHTML = `
        Товар: ${this._name} = ${this._price}
        <img src="${this._img}" />
      `
      const btn = new Button('Добавить в корзину', this.addToCart.bind(this))
      btn.render(block)

      placeToRender.appendChild(block)
    }
  }
}

class Cart {
  _items = [/* CartItem */]

 add (GoodItemInstance) {
   const FoundItem = this._items.find((CartItem) => {
     return CartItem._name === GoodItemInstance._name
   })

   if (FoundItem) {
     FoundItem.counter++
     } else {
       this._items.push(new CartItem({
         name: GoodItemInstance._name,
         price: GoodItemInstance._price,
       }))
     }
     
     this.render()
}

render () {
  const placeToRender = document.querySelector('.cart-list')
  if (placeToRender) {
    placeToRender.innerHTML = ''
  }

  this._items.forEach(CartItemInstance => {
    CartItemInstance.render(placeToRender)
  })
}
}

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
