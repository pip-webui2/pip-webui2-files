import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UploadFilesExampleComponent } from './upload-files-example/upload-files-example.component';

const appRoutes: Routes = [
    { path: 'upload_files', component: UploadFilesExampleComponent },
  { path: '', pathMatch: 'full', redirectTo: 'upload_files' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
