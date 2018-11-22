import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';

import { UploadFilesExampleModule } from './upload-files-example.module';
import { UploadFilesExampleComponent } from './upload-files-example.component';

describe('UploadFilesExampleComponent', () => {
  let component: UploadFilesExampleComponent;
  let fixture: ComponentFixture<UploadFilesExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FlexLayoutModule,

        UploadFilesExampleModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadFilesExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
