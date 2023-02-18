import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'firstNameOnly',
})
export class FirstNameOnlyPipe implements PipeTransform {
	transform(value: string): string {
		const name = value.split('. ');
		return name.length > 1 ? name[1].split(/(\s+)/)[0] : name[0].split(/(\s+)/)[0];
	}
}
