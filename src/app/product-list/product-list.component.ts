import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  private _productsUrl = '../assets/products.json';
  products: Product[];
  constructor(private _productService: ProductService) {}

  ngOnInit() {
    this._productService
      .getProducts(this._productsUrl)
      .subscribe((response) => (this.products = response));
  }
}