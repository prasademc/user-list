import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, shareReplay, throwError } from 'rxjs';
import { map, retry } from 'rxjs/operators';

// Import interfaces
import { Post } from '../domain/post.model';


@Injectable({
	providedIn: 'root',
})
export class PostService {
	API_BASE_URL = 'https://jsonplaceholder.typicode.com';

	constructor(private http: HttpClient) {}

	getPostByUser$(userID: number): Observable<Array<Post>> {
		return this.http.get<Array<Post>>(`${this.API_BASE_URL}/posts`).pipe(
			map((allPosts) =>
				allPosts.filter((post) => post.userId == userID)
			),
			retry(3),
			catchError((err) => {
				this.handleError(err);
				return throwError(err);
			})
		);
	}

	getPostByUserAll$(userID: number): Observable<Array<Post>> {
		return this.http.get<Array<Post>>(`${this.API_BASE_URL}/posts`).pipe(
			map((allPosts) =>
				allPosts.filter((post) => post.userId == userID)
			),
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
