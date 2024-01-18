import { Component, Input } from '@angular/core';
import { Product } from '../product/models';
import { ProductService } from '../product/product.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {

  @Input() Product!: Product;

  Message!: string;
  UpdateProduct() {
    this.productService.updateProduct(this.Product).subscribe(() => this.Message = `You succesfully updated product with Name${this.Product.Name}`);
  }

  ShowEditField:boolean=true;
  onShowEdit(){
    this.ShowEditField = !this.ShowEditField;
  }

  constructor(private productService: ProductService) {

  }


}
