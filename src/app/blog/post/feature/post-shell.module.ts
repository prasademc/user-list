import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PostShellComponent } from './post-shell/post-shell.component';

import { PostShellRoutingModule } from './post-shell-routing.module';

// Import components
import { PostDetailComponent } from '../ui/post-detail/post-detail.component';
import { LoadingSpinnerComponent } from '../../shared/ui/loading-spinner/loading-spinner.component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		PostShellRoutingModule,
	],
	exports: [LoadingSpinnerComponent],
	declarations: [PostShellComponent, PostDetailComponent, LoadingSpinnerComponent],
	providers: []
})
export class PostShellModule {}
