export const cart= [];

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
  
  }