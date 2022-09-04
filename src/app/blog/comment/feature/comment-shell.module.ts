import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommentShellComponent } from './comment-shell/comment-shell.component';

import { CommentShellRoutingModule } from './comment-shell-routing.module';

// Import components
import { CommentDetailComponent } from '../../comment/ui/comment-detail/comment-detail.component';
import { LoadingSpinnerComponent } from '../../shared/ui/loading-spinner/loading-spinner.component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		CommentShellRoutingModule
	],
	exports: [LoadingSpinnerComponent],
	declarations: [CommentShellComponent, CommentDetailComponent, LoadingSpinnerComponent],
	providers: []
})
export class CommentShellModule {}
