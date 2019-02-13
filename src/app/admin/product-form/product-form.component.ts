import { Observable } from 'rxjs/observable';
import { ProductService } from './../../product.service';
import { CategoryService } from './../../category.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-product-form',
	templateUrl: './product-form.component.html',
	styleUrls: [ './product-form.component.css' ]
})
export class ProductFormComponent implements OnInit {
	categories$;
	product = {};
	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private categoryService: CategoryService,
		private productService: ProductService
	) {
		this.categories$ = categoryService.getCategories();
		let id = route.snapshot.params.id;

		if (id) this.productService.getProduct(id).subscribe((p) => (this.product = p));
	}

	ngOnInit() {}

	save(products) {
		this.productService.create(products);
		this.router.navigate([ '/admin/products' ]);
	}
}
