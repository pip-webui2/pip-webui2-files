import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';

import { UploadFilesExampleComponent } from './upload-files-example.component';
import { PipFileUploadModule } from '../pip-webui2-files';

@NgModule({
  declarations: [
    UploadFilesExampleComponent
  ],
  imports: [
    HttpModule,

    PipFileUploadModule
  ],
  exports: [
    UploadFilesExampleComponent
  ],
  providers: [
    
  ],
})
export class UploadFilesExampleModule { }