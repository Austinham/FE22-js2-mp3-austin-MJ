import{fetchProducts} from "./java/fetch.js"
import { Cart } from "./java/shoppingcart.js";
import { displayProducts ,updateStock} from "./java/display.js";
import { displayCartQuantity,displayCartProducts,displayTotal } from "./java/cart.js";


const cart= new Cart();
let productarray=[];
fetchProducts()
.then(products=>{
    displayProducts(products,cart);
});

document.querySelector('#cart button').addEventListener('click',checkevent);


function checkevent(e){
    document.querySelector('#products').style.display = 'block';
    document.querySelector('#cart button').style.display = 'block';
    document.querySelector('#cart-products').style.display = 'block';
    displayCartQuantity(cart)
    displayCartProducts(cart);
    displayTotal(cart);
     updateStock(cart);

}