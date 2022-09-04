import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

// Import services
import { UserStoreService } from '../../application/user.store.service';

// Import interfaces
import { User } from '../../domain/user.model';
import { USER_INITIAL } from '../../domain/user.const'

@Component({
	selector: 'app-user-shell',
	templateUrl: './user-shell.component.html',
	styleUrls: ['./user-shell.component.scss'],
	providers: [UserStoreService],
})
export class UserShellComponent implements OnInit {

	users$!: Observable<Array<User>>;

	constructor(private userStoreService: UserStoreService, private router: Router) {}


	ngOnInit(): void {
		this.userStoreService.fetchUsers(null);
		this.users$ = this.userStoreService.users$;
	}

	public onSelectedUserClick(user: User): void {
		this.router.navigate([`users/${user.id}`]);
	}
}
