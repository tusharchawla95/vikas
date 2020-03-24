import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  productId: number;
  name: String;
  productType: String;
  productTitle: String;
  price: number;
  productImage: String;
  state: String;
  buttonColour: String;
  quantity: number; 
  amount: number;
  totalProductsAdded: number;




  constructor() {
    this.state = "Add To Cart"
    this.buttonColour = 'box2';
    this.quantity = 0;
    this.totalProductsAdded = 0

   }

  getData() {
    return [
      {productId: 1,buttonColour: this.buttonColour, state: this.state, quantity: this.quantity, name: "Milk", brand: "Amul", productType: "Beverages/Dairy", productTitle: "Amul Milk",price: "Rs. 40.00", productImage:"https://static.telegraphindia.com/library/THE_TELEGRAPH/image/2019/5/625ea097-97bf-4e11-ae4b-a549931b6029.jpg"},
      {productId: 2,buttonColour: this.buttonColour, state: this.state, quantity: this.quantity, name: "Bread", brand: "Britannia", productType: "Breads", productTitle: "Britannia",price: "Rs. 35.00", productImage:"https://images-na.ssl-images-amazon.com/images/I/81TF40zjRpL._SL1500_.jpg"},
      {productId: 3,buttonColour: this.buttonColour, state: this.state, quantity: this.quantity, name: "Jam", brand: "Kissan", productType: "Ketchup/Jam", productTitle: "Kissan Jam",price: "Rs. 57.45", productImage:"https://images-na.ssl-images-amazon.com/images/I/61sRwLNwUJL._SL1200_.jpg"},
      {productId: 4,buttonColour: this.buttonColour, state: this.state, quantity: this.quantity, name: "Cheese", brand: "Amul", productType: "Beverages/Dairy", productTitle: "Amul Cheese", price: "Rs. 99.00", productImage:"https://images-na.ssl-images-amazon.com/images/I/61N4noQDK1L._SX679_.jpg"},
      {productId: 5,buttonColour: this.buttonColour, state: this.state, quantity: this.quantity, name: "Butter", brand: "Amul", productType: "Beverages/Dairy", productTitle: "Amul Butter",price: "Rs. 70.00", productImage:"https://5.imimg.com/data5/OC/OF/MY-9101930/amul-butter-500x500.jpg"},
    ]
  }

  getProductId() {
    return this.productId;
  }
}


//Should we declare variables if they can be created dynamically?


