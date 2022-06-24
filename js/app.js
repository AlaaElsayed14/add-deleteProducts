let productInput= document.querySelector("#product-input");
let productButton= document.querySelector("#product-button")
let productContainer= document.querySelector("#product-container")


let data = [
  {id:1 , name:"iphone" , desc:"aaaa"},
  {id:2 , name:"hawai" , desc:"aaaa"},
  {id:3 , name:"oppo" , desc:"aaaa"},
];

function drawUi(){
  data.forEach((item)=>{
    productContainer.innerHTML +=`<div onclick="deleteProduct(${item.id})"> ${item.name} </div>`; 
  })
}

window.onload = function(){
  drawUi();
}

productButton.addEventListener("click" , addProduct)

function addProduct(){
  if (productInput.value == ""){
    alert("plaese enter product");
  }else{
    let lItem =data.length? data[data.length-1].id : 1;

    data.push({id: ++lItem , name: productInput.value , desc:"aaaa"});
    productContainer.innerHTML = "";
    drawUi();
    productInput.value="";
  }
}

function deleteProduct(id){
  data.splice(id-1 , 1);
  productContainer.innerHTML="";
  drawUi();
}