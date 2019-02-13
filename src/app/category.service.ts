import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class CategoryService {
	constructor(public db: AngularFireDatabase) {}

	getCategories() {
		return this.db.list('/categories', (ref) => ref.orderByChild('name')).valueChanges();
	}
}
