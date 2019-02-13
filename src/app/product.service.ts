import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class ProductService {
	constructor(private db: AngularFireDatabase) {}

	create(products) {
		this.db.list('/products').push(products);
	}

	getAll() {
		return this.db.list('/products');
	}

	getProduct(productId) {
		return this.db.list('/products' + productId).snapshotChanges();
	}
}
