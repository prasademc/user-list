import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, shareReplay, throwError } from 'rxjs';
import { map, retry } from 'rxjs/operators';

// Import interfaces
import { Comment } from '../domain/comment.model';

@Injectable({
	providedIn: 'root',
})
export class CommentService {
	API_BASE_URL = 'https://jsonplaceholder.typicode.com';

	constructor(private http: HttpClient) {}

	getCommentsByPost$(postID: number): Observable<Array<Comment>> {
		return this.http.get<Array<Comment>>(`${this.API_BASE_URL}/comments`).pipe(
			map((allComments) => allComments.filter((comment) => comment.postId == postID)),
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
