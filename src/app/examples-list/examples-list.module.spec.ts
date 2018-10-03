import { ExamplesListModule } from './examples-list.module';

describe('ExamplesListModule', () => {
  let examplesListModule: ExamplesListModule;

  beforeEach(() => {
    examplesListModule = new ExamplesListModule();
  });

  it('should create an instance', () => {
    expect(examplesListModule).toBeTruthy();
  });
});
