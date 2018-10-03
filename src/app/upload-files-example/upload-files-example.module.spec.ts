import { UploadFilesExampleModule } from './upload-files-example.module';

describe('UploadFilesExampleModule', () => {
  let uploadFilesExampleModule: UploadFilesExampleModule;

  beforeEach(() => {
    uploadFilesExampleModule = new UploadFilesExampleModule();
  });

  it('should create an instance', () => {
    expect(uploadFilesExampleModule).toBeTruthy();
  });
});
