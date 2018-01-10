import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule, MatSelectModule, MatSidenavModule, MatIconModule,MatButtonModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { PipThemesModule } from 'pip-webui2-themes';

import { AppComponent } from './app.component';
import { ExampleListModule } from './examples-list/examples-list.module';

import { UploadFilesExampleModule } from './upload-files-example/upload-files-example.module';
import { UploadFilesExampleComponent } from './upload-files-example/upload-files-example.component';

const appRoutes: Routes = [
  { path: 'upload_files', component: UploadFilesExampleComponent },
  { path: '', pathMatch: 'full', redirectTo: 'upload_files' }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatSelectModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    PipThemesModule,

    ExampleListModule,
    UploadFilesExampleModule,

    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 