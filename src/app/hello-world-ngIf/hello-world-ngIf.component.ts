import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'hello-world-ngIf',
	templateUrl: 'hello-world-ngIf.component.html'
})

export class HelloWorldNgIfComponent implements OnInit {
	message = `ReadOnly`
	canEdit = false;

	editClick() {
		this.canEdit = !this.canEdit;

		if(this.canEdit) {
			this.message = `Edit me!`
		} else {
			this.message = `ReadOnly`
		}
	}
	ngOnInit() { }
}