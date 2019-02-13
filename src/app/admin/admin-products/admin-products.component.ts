import { map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import 'rxjs/add/operator/map';

@Component({
	selector: 'app-admin-products',
	templateUrl: './admin-products.component.html',
	styleUrls: [ './admin-products.component.css' ]
})
export class AdminProductsComponent {
	products$;
	constructor(private productService: ProductService) {
		this.products$ = this.productService
			.getAll()
			.snapshotChanges()
			.pipe(map((changes) => changes.map((c) => ({ key: c.payload.key, ...c.payload.val() }))));
	}
}
