import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserShellComponent } from './user-shell/user-shell.component';

import { UserShellRoutingModule } from './user-shell-routing.module';

//import components
import { NameButtonComponent } from '../ui/name-button/name-button.component';
import { LoadingSpinnerComponent } from '../../shared/ui/loading-spinner/loading-spinner.component';

// Import pipes
import { FirstNameOnlyPipe } from '../../shared/utils/first-name-only.pipe';


@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		UserShellRoutingModule
	],
	exports: [LoadingSpinnerComponent],
	declarations: [UserShellComponent, NameButtonComponent, FirstNameOnlyPipe, LoadingSpinnerComponent],
	providers: []
})
export class UseShellModule {}
