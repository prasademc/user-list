import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { catchError, EMPTY, Observable, switchMap } from 'rxjs';
import { tap } from 'rxjs/operators';

// Import interfaces
import { User } from '../domain/user.model';
import { UserStore } from '../domain/user-store.model';
import { USER_INITIAL_STATE } from '../domain/user.const';

// Import services
import { UserService } from '../data-access/user.service';

@Injectable()
export class UserStoreService extends ComponentStore<UserStore> {
	constructor(private userService: UserService) {
		super(USER_INITIAL_STATE);
	}

	readonly users$ = this.select((state) => state.users);

	readonly setUsers = this.updater((state, users: Array<User>) => ({
		...state,
		users,
	}));

	readonly fetchUsers = this.effect((users$: Observable<null>) =>
		users$.pipe(
			switchMap(() =>
				this.userService.getUsers$().pipe(
					tap((users) => this.setUsers(users)),
					catchError(() => EMPTY)
				)
			)
		)
	);
}
