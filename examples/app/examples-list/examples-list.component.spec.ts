import { TestBed, inject } from '@angular/core/testing';

import { ExamplesListComponent } from './examples-list.component';

describe('a examples-list component', () => {
	let component: ExamplesListComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				ExamplesListComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([ExamplesListComponent], (ExamplesListComponent) => {
		component = ExamplesListComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});