import { async } from '@angular/core/testing';

import { PipFileUploadModule } from './file-upload.module';

describe('FileUploadModule', () => {
    let pipFileUploadModule: PipFileUploadModule;

    beforeEach(async(() => {
        pipFileUploadModule = new PipFileUploadModule();
    }));

    it('should create an instance', async(() => {
        expect(pipFileUploadModule).toBeTruthy();
    }));
});
