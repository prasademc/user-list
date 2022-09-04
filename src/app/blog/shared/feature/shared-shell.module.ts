import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import components
import { LoadingSpinnerComponent } from '../../shared/ui/loading-spinner/loading-spinner.component';

@NgModule({
	declarations: [LoadingSpinnerComponent],
	imports: [CommonModule],
	exports: [LoadingSpinnerComponent],
})
export class SharedShellModule {}
