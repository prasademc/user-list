import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

// Import interfaces
import { Comment } from '../../domain/comment.model';

@Component({
	selector: 'app-comment-detail',
	templateUrl: './comment-detail.component.html',
	styleUrls: ['./comment-detail.component.scss'],
})
export class CommentDetailComponent implements OnInit, OnChanges {
	@Input() commentData!: Comment;

	constructor() {}

	ngOnChanges(changes: SimpleChanges): void {
		this.commentData = changes['commentData'].currentValue;
	}

	ngOnInit(): void {}
}
