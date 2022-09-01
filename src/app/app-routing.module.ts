import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShellComponent } from './blog/shared/layout/shell/shell.component';

const routes: Routes = [
	{
        path: '',
        component: ShellComponent,
        pathMatch: 'full',
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
