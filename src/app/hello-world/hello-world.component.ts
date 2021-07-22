import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'hello-world',
	templateUrl: 'hello-world.component.html'
})

export class HelloWorldComponent implements OnInit {
	text = `SOME TEXT!`;
	ngOnInit() { }
}