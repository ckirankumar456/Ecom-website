class product{
    constructor(name,price);
    this.name=name;
    this.price=price;
}
displayProduct(){
    console.log("product: "+this.price)
    console.log("price: "+this.name)
}

const product1=new product("shirt",12.99)
product1.displayProduct();
