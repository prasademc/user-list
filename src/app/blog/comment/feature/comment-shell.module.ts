import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommentShellComponent } from './comment-shell/comment-shell.component';

import { CommentShellRoutingModule } from './comment-shell-routing.module';

// Import components
import { CommentDetailComponent } from '../../comment/ui/comment-detail/comment-detail.component';

// Import modules
import { SharedShellModule } from '../../shared/feature/shared-shell.module';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		CommentShellRoutingModule,
		SharedShellModule
	],
	exports: [],
	declarations: [CommentShellComponent, CommentDetailComponent],
	providers: []
})
export class CommentShellModule {}
