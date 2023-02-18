import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class NavigationStatusService {
	public selectedUserID: BehaviorSubject<any> = new BehaviorSubject<any>(0);
	constructor() {}

	public updateSelectedUserId(id: number, status: boolean): any {
		return this.selectedUserID.next({id: id, previousPostStatus: status});
	}
}
