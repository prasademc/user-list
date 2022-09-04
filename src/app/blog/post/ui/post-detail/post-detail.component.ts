import {
	ChangeDetectorRef,
	Component,
	EventEmitter,
	Input,
	OnChanges,
	OnInit,
	Output,
	SimpleChanges,
} from '@angular/core';

// Import interfaces
import { Post } from '../../domain/post.model';

// Import services
import { PostCommentStatusService } from '../../../shared/data-access/post-comment-status.service';


@Component({
	selector: 'app-post-detail',
	templateUrl: './post-detail.component.html',
	styleUrls: ['./post-detail.component.scss'],
})
export class PostDetailComponent implements OnInit, OnChanges {
	@Input() postData!: Post;
	@Output() expandPost = new EventEmitter<Post>();
	isExpanded: boolean = false;

	constructor(private postCommentStatusService:PostCommentStatusService, private ref: ChangeDetectorRef) {}

	ngOnInit(): void {
		this.postCommentStatusService.selectedPostID.subscribe((id) => {
			this.isExpanded = id == this.postData.id ? true: false;
		})
	}

	ngOnChanges(changes: SimpleChanges): void {
		this.postData = changes['postData'].currentValue;
	}

	public onExpand(data: Post): void {
		this.expandPost.emit(data);
		this.isExpanded = !this.isExpanded
		this.postCommentStatusService.updateSelectedPostId(data.id as number);
		this.ref.detectChanges();
	}
}
