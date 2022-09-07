import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class PostCommentStatusService {

	public selectedPostID: BehaviorSubject<number> = new BehaviorSubject<number>(0);
	constructor() {}

	public updateSelectedPostId(id: number): any {
		return this.selectedPostID.next(id);
	}
}
