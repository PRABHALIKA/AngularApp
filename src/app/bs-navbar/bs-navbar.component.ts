import { AppUser } from './../models/app-user';
import { AuthService } from './../auth.service';
import { Component } from '@angular/core';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';

@Component({
	selector: 'bs-navbar',
	templateUrl: './bs-navbar.component.html',
	styleUrls: [ './bs-navbar.component.css' ]
})
export class BsNavbarComponent {
	appUser: AppUser;
	constructor(public auth: AuthService) {
		auth.appUser$.subscribe((appUser) => (this.appUser = appUser));
	}

	logout() {
		this.auth.logout();
	}
}
