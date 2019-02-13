import { UsersService } from './users.service';
import { AppUser } from './models/app-user';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { of } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	user$: Observable<firebase.User>;
	constructor(private userService: UsersService, private afAuth: AngularFireAuth, private Router: ActivatedRoute) {
		this.user$ = this.afAuth.authState;
	}
	login() {
		let returnUrl = this.Router.snapshot.queryParamMap.get('returnUrl') || '/';
		localStorage.setItem('returnUrl', returnUrl);
		this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
	}

	logout() {
		this.afAuth.auth.signOut();
	}

	get appUser$(): Observable<AppUser> {
		return this.user$.switchMap((user) => {
			if (user) return this.userService.get(user.uid).valueChanges();

			return of(null);
		});
	}
}
