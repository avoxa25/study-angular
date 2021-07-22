import { TestBed, inject } from '@angular/core/testing';

import { HelloWorldComponent } from './hello-world.component';

describe('a hello-world component', () => {
	let component: HelloWorldComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				HelloWorldComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([HelloWorldComponent], (HelloWorldComponent) => {
		component = HelloWorldComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});