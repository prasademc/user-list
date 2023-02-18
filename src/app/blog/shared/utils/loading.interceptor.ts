import {
	HttpErrorResponse,
	HttpEvent,
	HttpHandler,
	HttpInterceptor,
	HttpRequest,
	HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
	catchError,
	combineLatest,
	distinctUntilChanged,
	map,
	Observable,
	skip,
	startWith,
	takeWhile,
	throwError,
	timer,
} from 'rxjs';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
	constructor() {}

	intercept(
		req: HttpRequest<any>,
		next: HttpHandler
	): Observable<HttpEvent<any>> {
		const loading$ = timer(500, 100).pipe(
			startWith(false),
			map((number) => !number),
			takeWhile<boolean>(Boolean, true)
		);

		const apiCall$ = next.handle(req).pipe(
			catchError((error) => {
				this.handlerError(error);
				return throwError(error);
			})
		);

		return combineLatest([apiCall$, loading$]).pipe(
			takeWhile(
				([response, loading]) =>
					!(response instanceof HttpResponse) || loading,
				true
			),
			map(([response, loading]) => {
				if (!(response instanceof HttpResponse) || loading) {
					console.log(loading);
					// loading service
				}

				console.log('finished')
				// Hide loading service
				return response;
			}),
			skip(1),
			distinctUntilChanged()
		);
	}

	private handlerError(err: HttpErrorResponse): void {
		const { error, status } = err;

		switch (status) {
			case 400:
				console.error(`Bad request: ${error?.message}`);
				break;
			case 403:
				console.error(`Access denied: ${error?.message}`);
				break;
			case 404:
				console.error(`Not found: ${error?.message}`);
				break;
			case 500:
				console.error(`Internal server error: ${error?.message}`);
				break;
			default:
				console.error(`Unknown server error: ${error?.message}`);
				break;
		}
	}
}
