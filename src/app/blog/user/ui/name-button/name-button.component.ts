import {
	Component,
	EventEmitter,
	Input,
	Output,
	ChangeDetectionStrategy,
	OnChanges,
	SimpleChanges,
	OnInit,
	ChangeDetectorRef,
	OnDestroy,
} from '@angular/core';

// Import interfaces
import { User } from '../../domain/user.model';

// Import services
import { NavigationStatusService } from '../../../shared/data-access/navigation-status.service'
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-name-button',
	templateUrl: './name-button.component.html',
	styleUrls: ['./name-button.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NameButtonComponent implements OnInit, OnChanges, OnDestroy {
	@Input() userData!: User;
	@Output() selectedUser = new EventEmitter<User>();
	navigationStatusSubscription = new Subscription()
	isSelected: boolean = false;

	constructor(private navigationStatusService:NavigationStatusService, private ref: ChangeDetectorRef) {}

	ngOnInit(): void {
		this.navigationStatusSubscription.add(this.navigationStatusService.selectedUserID.subscribe((id) => {
			this.isSelected = id == this.userData.id ? true : false;
			this.ref.detectChanges();
		}));
	}

	ngOnDestroy(): void {
		if(!!this.navigationStatusSubscription) this.navigationStatusSubscription.unsubscribe();
	}

	public onButtonClick(user: User): void {
		this.navigationStatusService.updateSelectedUserId(user.id);
		this.selectedUser.emit(user);
	}

	ngOnChanges(change: SimpleChanges): void {
		this.userData = change['userData'].currentValue;
	}
}
