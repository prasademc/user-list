import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PostShellComponent } from './post-shell/post-shell.component';

import { PostShellRoutingModule } from './post-shell-routing.module';

// Import components
import { PostDetailComponent } from '../ui/post-detail/post-detail.component';

// Import modules
import { SharedShellModule } from '../../shared/feature/shared-shell.module';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		PostShellRoutingModule,
		SharedShellModule
	],
	exports: [],
	declarations: [PostShellComponent, PostDetailComponent],
	providers: []
})
export class PostShellModule {}
