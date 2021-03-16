import Button from './button'

import Gooditem from './gooditem'

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
  
      const url = `/database/items.json`;
      return fetch(url);
    }
      
      
  
    render () {
      this._items.forEach(Good => {
        Good.render()
      })
    }
  }
  