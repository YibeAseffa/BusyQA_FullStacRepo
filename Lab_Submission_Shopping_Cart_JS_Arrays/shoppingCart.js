// Creating shopping cart object
let shoppingCart={
    items:[],
    addItem: function(item){
        this.items.push(item);
    }
};

//Defining the item objet
function Item (name,price){
    this.name=name;
    this.price=price;
}

//Adding items to the shopping cart
let item1=new Item('Shirt',20);
let item2=new Item('Pants',30);
let item3=new Item('Socks',13);


shoppingCart.addItem(item1);
shoppingCart.addItem(item2);
shoppingCart.addItem(item3);


//Removing items

shoppingCart.removeItem=function(index){
    this.items.splice(index,1);
};

//Calculating total price

shoppingCart.calculateTotal=function(){
    let total=0;
    for(let i=0;i<this.items.length;i++){
        total+=this.items[i].price;
    }
    return total;
};

//Applying discount code

shoppingCart.applyDiscountCode=function(code){
    switch(code)
    
{
    case 'SAVE10':
        return this.calculateTotal()*0.9; //Apply 10% discount

    case 'SAVE20':
        return this.calculateTotal()*0.8;// Apply 20% dicount
    
    default:
        return this,calculateTotal();
}
};

//Getting current cart Items

shoppingCart.getCurrentItems = function(){
    return this.items.map(item=>item.name);
};

shoppingCart.getCurrentItemsPrice = function(){
    return this.items.map( item=>item.price);
};

//testing the shopping cart methods

console.log("current items: ",shoppingCart.getCurrentItems());



//shoppingCart.removeItem(0);

console.log("current items after removing first Item: ", shoppingCart.getCurrentItems());



console.log("Total: $",shoppingCart.calculateTotal());



console.log("Total with 10% discont: $",shoppingCart.applyDiscountCode('SAVE10'));



//display cart function

function displayCart() {
   
    let data= shoppingCart.getCurrentItems();
    let dataPrice= shoppingCart.getCurrentItemsPrice();

    let list= document.getElementById("cartItems");
      
    for (i = 0; i < data.length && i<dataPrice.length; ++i) {
        let li = document.createElement('li');
       
     
      
        li.innerText = data[i]+"  $"+ dataPrice[i];
      
        list.appendChild(li);
        
       
    }
    document.getElementById("itemsLeft").innerHTML=getItemsLeft();

   
  }

//remove Item and display  function 

  function removeItemFromCart(itemNumber) {
   
    shoppingCart.removeItem(Number(itemNumber)-1);
    
    let data= shoppingCart.getCurrentItems();
    let dataPrice= shoppingCart.getCurrentItemsPrice();
    let list= document.getElementById("itemsAfterRemove");
      
    for (i = 0; i < data.length && i<dataPrice.length; ++i) {
        let li = document.createElement('li');
       
     
      
        li.innerText = data[i]+"  $"+ dataPrice[i];
      
        list.appendChild(li);
        
       
    }
    document.getElementById("itemsLeft").innerHTML=getItemsLeft();

   
  }


  //show total price 

  function showTotal() {
    
    
    document.getElementById("total").innerHTML="Total Price : $" +shoppingCart.calculateTotal();

    document.getElementById("discount").innerHTML="Total Price With 10% dicount is  : $" +shoppingCart.applyDiscountCode('SAVE10');
    
       
    
   
  }

//calculate remaining item from array
  function getItemsLeft(){
    let itemLeft= shoppingCart.getCurrentItems().length;
    
    return "("+itemLeft+")";

  }


 


