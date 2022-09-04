import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostShellComponent } from './post-shell/post-shell.component';

const routes: Routes = [
	{
		path: '',
		component: PostShellComponent,
		children: [
			{
				path: ':postID',
				loadChildren: () =>
					import('../../comment/feature/comment-shell.module').then(
						(m) => m.CommentShellModule
					),
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class PostShellRoutingModule {}
