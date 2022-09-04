import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

// Import interfaces
import { Comment } from '../../domain/comment.model';

// Import services
import { CommentStoreService } from '../../application/comment.store.service';


@Component({
	selector: 'app-comment-shell',
	templateUrl: './comment-shell.component.html',
	styleUrls: ['./comment-shell.component.scss'],
	providers: [CommentStoreService]
})
export class CommentShellComponent implements OnInit {
	postID: number = 0;
	queryParamsSubscription = new Subscription();
	postComments$!: Observable<Array<Comment>>;

	constructor(
		private commentStoreService: CommentStoreService,
		private route: ActivatedRoute
	) {
		this.queryParamsSubscription.add(
			this.route.paramMap.subscribe((queryParams: any) => {
				this.postID = queryParams.params['postID'];
				this.commentStoreService.fetchPostComments({ postID: this.postID });
				this.postComments$ = this.commentStoreService.postComments$;
			})
		);
	}

	ngOnInit(): void {}

	ngOnDestroy(): void {
		if (!!this.queryParamsSubscription)
			this.queryParamsSubscription.unsubscribe();
	}
}
