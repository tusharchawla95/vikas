import { Component, OnInit } from '@angular/core';
import { ProductsService } from "../services/products.service"
import { ThrowStmt } from '@angular/compiler';

export interface PeriodicElement {
  name: string;
  amount: number;
  quantity: number;
  total: number;
}


@Component({
  selector: 'settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  displayedColumns: string[] = ['name', 'amount', 'quantity', 'total'];
  products = [];
  dataSource = this.products;

  
  constructor(private prodService: ProductsService) {


   }

  ngOnInit(): void {
    this.products =  this.prodService.getData();
    

  }

}
