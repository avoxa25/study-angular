import { TestBed, inject } from '@angular/core/testing';

import { HelloWorldNgIfComponent } from './hello-world-ngIf.component';

describe('a hello-world-ngIf component', () => {
	let component: HelloWorldNgIfComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				HelloWorldNgIfComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([HelloWorldNgIfComponent], (HelloWorldNgIfComponent) => {
		component = HelloWorldNgIfComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});