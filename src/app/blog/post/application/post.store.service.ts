import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { catchError, EMPTY, Observable, switchMap } from 'rxjs';
import { tap } from 'rxjs/operators';

// Import interfaces
import { Post } from '../domain/post.model';
import { User } from '../../user/domain/user.model';
import { PostStore } from '../domain/post-store.model';
import { POST_INITIAL_STATE } from '../domain/post.const';

// Import services
import { PostService } from '../data-access/post.service';
import { UserService } from '../../user/data-access/user.service';

@Injectable()
export class PostStoreService extends ComponentStore<PostStore> {
	constructor(
		private postService: PostService,
		private userService: UserService
	) {
		super(POST_INITIAL_STATE);
	}

	readonly userPosts$ = this.select((state) => state.userPosts);
	readonly user$ = this.select((state) => state.user);
	readonly userCurrentPosts$ = this.select((state) => state.currentAllPost);



	readonly setUserPosts = this.updater((state, userPosts: Array<Post>) => ({
		...state,
		userPosts,
	}));

	readonly setUserAllCurrentPosts = this.updater((state, currentAllPost: Array<Post>) => ({
		...state,
		currentAllPost,
	}));

	readonly setUser = this.updater((state, user: User) => ({
		...state,
		user,
	}));

	readonly fetchUserPosts = this.effect(
		(posts$: Observable<{ userID: number }>) =>
			posts$.pipe(
				switchMap(({ userID }) =>
					this.postService.getPostByUser$(userID).pipe(
						tap((posts) => this.setUserPosts(posts)),
						catchError(() => EMPTY)
					)
				)
			)
	);

	readonly fetchUser = this.effect((user$: Observable<{ userID: number }>) =>
		user$.pipe(
			switchMap(({ userID }) =>
				this.userService.getUsersById$(userID).pipe(
					tap((user) => this.setUser(user)),
					catchError(() => EMPTY)
				)
			)
		)
	);


	readonly fetchUserAllCurrentPosts = this.effect(
		(posts$: Observable<{ userID: number }>) =>
			posts$.pipe(
				switchMap(({ userID }) =>
					this.postService.getPostByUser$(userID).pipe(
						tap((posts) => this.setUserPosts(posts)),
						catchError(() => EMPTY)
					)
				)
			)
	);

}
