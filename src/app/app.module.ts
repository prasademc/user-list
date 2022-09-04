import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Import components
import { ShellComponent } from './blog/shared/layout/shell/shell.component';

// Import services
import { NavigationStatusService } from './blog/shared/data-access/navigation-status.service';
import { PostCommentStatusService } from './blog/shared/data-access/post-comment-status.service';

@NgModule({
	declarations: [AppComponent, ShellComponent],
	imports: [BrowserModule, AppRoutingModule, HttpClientModule],
	providers: [NavigationStatusService, PostCommentStatusService],
	bootstrap: [AppComponent],
})
export class AppModule {}
