import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShellComponent } from './blog/shared/layout/shell/shell.component';

const routes: Routes = [
	{
		path: '',
		component: ShellComponent,
		pathMatch: 'full',
	},
	{
		path: 'users',
		loadChildren: () =>
			import('./blog/user/feature/user-shell.module').then(
				(m) => m.UseShellModule
			),
	},
	// {
	// 	path: "**",
	// 	redirectTo: ""
	// }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
