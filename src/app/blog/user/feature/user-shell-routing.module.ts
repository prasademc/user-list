import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserShellComponent } from './user-shell/user-shell.component';

const routes: Routes = [
	{
		path: '',
		component: UserShellComponent,
		children: [
			{
				path: ':userID',
				loadChildren: () =>
					import('../../post/feature/post-shell.module').then(
						(m) => m.PostShellModule
					),
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class UserShellRoutingModule {}
