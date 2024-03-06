const dispGrid = document.querySelector('.js-grid-cont');
let Htmlstring='';
products.forEach((value)=>{
    const html=`<div class="product-container js-product-container">
    <div class="product-image-container">
      <img class="product-image"
        src="${value.image}">
    </div>

    <div class="product-name limit-text-to-2-lines">
      ${value.name}
    </div>

    <div class="product-rating-container">
      <img class="product-rating-stars"
        src="images/ratings/rating-${value.rating.stars*10}.png">
      <div class="product-rating-count link-primary">
        ${value.rating.count}
      </div>
    </div>

    <div class="product-price">
      ${value.priceCents}
    </div>

    <div class="product-quantity-container">
      <select>
        <option selected value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
    </div>

    <div class="product-spacer"></div>

    <div class="added-to-cart">
      <img src="images/icons/checkmark.png">
      Added
    </div>

    <button class="add-to-cart-button js-add-to button-primary " data-product-id ="${value.id}">
      Add to Cart
    </button>
  </div>`;
  Htmlstring+=html;


})
dispGrid.innerHTML=Htmlstring;
const addB = document.querySelectorAll('.js-add-to');
addB.forEach((button)=>{
    button.addEventListener('click',()=>{
        const productId = button.dataset.productId;
        let matchingItem;
        cart.forEach((item)=>{
            if(productId === item.productId){
                    matchingItem = item;
            }
        });
        if(matchingItem){
            matchingItem.quantity+=1;
        }
        else{

            cart.push({
                productId: productId,
                quantity:1

            });
        }
       let totalQuantity =0;
       cart.forEach((item)=>{
        totalQuantity+=item.quantity;
       });
       document.querySelector('.js-cart-quantity').innerHTML=totalQuantity;
        

    })
});