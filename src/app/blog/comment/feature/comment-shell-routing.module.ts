import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentShellComponent } from './comment-shell/comment-shell.component';

const routes: Routes = [
	{
		path: '',
		component: CommentShellComponent
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class CommentShellRoutingModule {}
