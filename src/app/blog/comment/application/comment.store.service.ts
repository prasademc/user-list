import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { catchError, EMPTY, Observable, switchMap } from 'rxjs';
import { tap } from 'rxjs/operators';

// Import interfaces
import { Comment } from '../domain/comment.model';
import { CommentStore } from '../domain/comment-store.model';
import { COMMENT_INITIAL_STATE } from '../domain/comment.const';

// Import services
import { CommentService } from '../data-access/comment.service';

@Injectable()
export class CommentStoreService extends ComponentStore<CommentStore> {
	constructor(private commentService: CommentService) {
		super(COMMENT_INITIAL_STATE);
	}

	readonly postComments$ = this.select((state) => state.postComments);

	readonly setPostComments = this.updater(
		(state, postComments: Array<Comment>) => ({
			...state,
			postComments,
		})
	);

	readonly fetchPostComments = this.effect(
		(comment$: Observable<{ postID: number }>) =>
			comment$.pipe(
				switchMap(({ postID }) =>
					this.commentService.getCommentsByPost$(postID).pipe(
						tap((comments) => this.setPostComments(comments)),
						catchError(() => EMPTY)
					)
				)
			)
	);
}
