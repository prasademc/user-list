import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, shareReplay, throwError } from 'rxjs';
import { map, retry } from 'rxjs/operators';

// Import interfaces
import { User } from '../domain/user.model';


@Injectable({
	providedIn: 'root',
})
export class UserService {
	API_BASE_URL = 'https://jsonplaceholder.typicode.com';

	constructor(private http: HttpClient) {}

	getUsers$(): Observable<Array<User>> {
		return this.http.get<Array<User>>(`${this.API_BASE_URL}/users`).pipe(
			map((data) => data),
			retry(3),
			catchError((err) => {
				this.handleError(err);
				return throwError(err);
			})
		);
	}

	getUsersById$(userID: number): Observable<User> {
		return this.http.get<Array<User>>(`${this.API_BASE_URL}/users`).pipe(
			map((data) => data.filter((user) => user.id == userID)[0]),
			retry(3),
			catchError((err) => {
				this.handleError(err);
				return throwError(err);
			})
		);
	}

	private handleError(err: HttpErrorResponse): void {
		console.log(err);
	}
}
