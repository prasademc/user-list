import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class NavigationStatusService {
	public selectedUserID: BehaviorSubject<number> = new BehaviorSubject<number>(0);
	constructor() {}

	public updateSelectedUserId(id: number): any {
		return this.selectedUserID.next(id);
	}
}
