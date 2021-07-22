import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'hello-world',
	templateUrl: 'hello-world.component.html'
})

export class HelloWorldComponent implements OnInit {
	text = `SOME TEXT!`;
	fontColor = Math.random() > 0.5 ? `red`: `green`;
	canClick = Math.random() > 0.5 ? true: false;
	alertMessage() {
		alert(`Button has been clicked`)
	}
	ngOnInit() { }
}