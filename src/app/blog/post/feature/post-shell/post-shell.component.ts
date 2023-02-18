import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

// Import services
import { PostStoreService } from '../../application/post.store.service';

// Import interfaces
import { Post } from '../../domain/post.model';
import { User } from 'src/app/blog/user/domain/user.model';

@Component({
	selector: 'app-post-shell',
	templateUrl: './post-shell.component.html',
	styleUrls: ['./post-shell.component.scss'],
	providers: [PostStoreService],
})
export class PostShellComponent implements OnInit, OnDestroy {
	userID: number = 0;
	queryParamsSubscription = new Subscription();
	userPosts$!: Observable<Array<Post>>;
	loadAll: boolean = false;
	user$!: Observable<User>;

	constructor(
		private postStoreService: PostStoreService,
		private route: ActivatedRoute,
		private router: Router
	) {
		this.queryParamsSubscription.add(
			this.route.paramMap.subscribe((queryParams: any) => {
				this.userID = queryParams.params['userID'];
				this.postStoreService.fetchUserPosts({ userID: this.userID });
				this.userPosts$ = this.postStoreService.userPosts$;
				this.postStoreService.fetchUser({ userID: this.userID });
				this.user$ = this.postStoreService.user$;
			})
		);
	}

	ngOnInit(): void {}

	onLoadAll(): void {
		//this.loadAll = !this.loadAll;
		this.userPosts$ = this.postStoreService.userCurrentPosts$;
	}

	onExpandPost(post: Post): void {
		this.router.navigate([`users/${post.userId}/${post.id}`]);
	}

	ngOnDestroy(): void {
		if (!!this.queryParamsSubscription)
			this.queryParamsSubscription.unsubscribe();
	}
}
