export let cart= JSON.parse(localStorage.getItem('cart'))||
//  [{
//     productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
//     quantity: 2
// },{
//     productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
//     quantity:1
// }
[];
export function updateCartQuantity(){
    let totalQuantity =0;
    cart.forEach((item)=>{
     totalQuantity+=item.quantity;
    });
   return totalQuantity;
   
  };
export function addToCart(productId){
    let matchingItem;
          let quantity = Number(document.querySelector(`.js-quantity-selector-${productId}`).value)
          cart.forEach((item)=>{
              if(productId === item.productId){
                      matchingItem = item;
              }
          });
          if(matchingItem){
              matchingItem.quantity+=quantity;
          }
          else{
  
              cart.push({
                  productId: productId,
                  quantity
  
              });
          }
          localStorage.setItem('cart', JSON.stringify(cart));
  
  }

  export function removeFromCart(productId){
      let newCart =[];
      cart.forEach((item)=>{
        if(item.productId!==productId){
            newCart.push(item);
        }
        

      });
      cart = newCart;
      localStorage.setItem('cart', JSON.stringify(cart));
  }