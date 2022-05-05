export default class Cart {
  cartItems = []; // [product: {...}, count: N]

  constructor(cartIcon) {
    this.cartIcon = cartIcon;
  }

  addProduct(product) {
    let index = 0;
    let itemIndex = 0;
    let isAdded = false;
    if(product !== null && product != '' && typeof(product) != 'undefined'){
      this.cartItems.forEach(item =>{
        if(item[0].id === product.id){
          this.updateProductCount(product.id, 1);
          isAdded = true;
          itemIndex = index;
        }
        index++; 
      });
      if(!isAdded){
        this.cartItems.push([product, 1]);
        itemIndex = this.cartItems.length - 1;
      }
      this.onProductUpdate(this.cartItems[itemIndex]);
    }
  }

  updateProductCount(productId, amount) {
    let index = 0;
    let itemIndex = 0;
    let isRemoved = false;
    this.cartItems.forEach(item => {
      if(item[0].id === productId){
        item[1] += amount; 
        if(item[1] < 1){
          this.cartItems.splice(index, 1);
          isRemoved = true;
        }
        itemIndex = index; 
      }
      index++;
    });
    this.onProductUpdate(this.cartItems[itemIndex]);
  }

  isEmpty() {
    return this.cartItems.length === 0;
  }

  getTotalCount() {
    let count = 0
    this.cartItems.forEach(item => count += item[1]);
    return count;
  }

  getTotalPrice() {
    let price = 0;
    this.cartItems.forEach(item => price += item[0].price * item[1]);
    return price;
  }

  onProductUpdate(cartItem) {
    // реализуем в следующей задаче

    this.cartIcon.update(this);
  }
}

