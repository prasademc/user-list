import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserShellComponent } from './user-shell/user-shell.component';

import { UserShellRoutingModule } from './user-shell-routing.module';

//import components
import { NameButtonComponent } from '../ui/name-button/name-button.component';

// Import pipes
import { FirstNameOnlyPipe } from '../../shared/utils/first-name-only.pipe';

// Import modules
import { SharedShellModule } from '../../shared/feature/shared-shell.module';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		UserShellRoutingModule,
		SharedShellModule,
	],
	exports: [],
	declarations: [UserShellComponent, NameButtonComponent, FirstNameOnlyPipe],
	providers: [],
})
export class UseShellModule {}
