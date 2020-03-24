import { Component, OnInit } from '@angular/core';
import { ProductsService } from "../services/products.service"

@Component({
  selector: 'items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  public isClicked = false;
  currentProduct;
  products = [];

  constructor(private prodService: ProductsService) { }

  ngOnInit(): void {
   this.products =  this.prodService.getData();
  }

  handleChange(productId) {
      this.isClicked = !this.isClicked;
      this.currentProduct = this.products.find(item => item.productId === productId);
      this.currentProduct.buttonColour = this.isClicked? 'box1': 'box2';
     
      this.currentProduct.state = !this.isClicked ? 'Add To Cart' : 'Remove from Cart';
      this.currentProduct.quantity = !this.isClicked ? 1: 0;
  }
  }

