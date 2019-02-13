import { Observable } from 'rxjs/observable';
import { UsersService } from './users.service';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

@Injectable({
	providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {
	constructor(private auth: AuthService, private userService: UsersService) {}

	canActivate(): Observable<boolean> {
		return this.auth.appUser$.map((appUser) => appUser.isAdmin);
	}
}
