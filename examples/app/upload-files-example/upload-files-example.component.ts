import { Component, ElementRef, OnInit } from '@angular/core';
import { ObservableMedia } from "@angular/flex-layout";

import { PipFileUploadService } from '../pip-webui2-files';
@Component({
	selector: 'upload-files-example',
    templateUrl: 'upload-files-example.component.html',
    styleUrls: ['./upload-files-example.component.scss']
})
export class UploadFilesExampleComponent implements OnInit {
    private files: any[] = [];
    private url: string = 'http://tracker.pipservices.net:8080/api/v1/blobs';
    private sessionId: string = '7501b38b1cea42f2b0d34d282b701e5c';
    private blobId: string = 'a0573d87408c4e6ebb93ff75569a821b';

    constructor(
        public media: ObservableMedia,
        public fileUploadService: PipFileUploadService
    ) { }

    ngOnInit() { }

    changeFile(e) {
        this.files = [];
        let files = e.dataTransfer ? e.dataTransfer.files : e.target.files;

        for (let i = 0; i < files.length; i++) {
            let file = files[i];
            if (!file) return;

            let reader = new FileReader();

            reader.onloadend = (result: any) => {
                this.files.push(
                    result.target.result
                )

                if (files.length - 1 == i) this.uploadFiles();
            }
            reader.readAsArrayBuffer(file)
        };
    }

    private uploadFiles() {
        this.fileUploadService.uploadFiles(this.url /* + '/' + this.blobId*/, this.files, this.sessionId).subscribe(
            (result: any) => {
                console.log('res', result);
            }
        );
    }

}