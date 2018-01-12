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
    private headers: any =  {
        'x-session-id':'7501b38b1cea42f2b0d34d282b701e5c'
    };
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
                 this.files.push({ file: this.dataURItoBlob(
                    result.target.result), fileName: file.name }
                 )

                 if (files.length - 1 == i) this.uploadFiles();
             }
             reader.readAsDataURL(file)
        };
    }

    private dataURItoBlob(dataURI) {
        // convert base64 to raw binary data held in a string
        // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
        var byteString = atob(dataURI.split(',')[1]);
    
        // separate out the mime component
        var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    
        // write the bytes of the string to an ArrayBuffer
        var ab = new ArrayBuffer(byteString.length);
        var ia = new Uint8Array(ab);
        for (var i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }

        //New Code
        return new Blob([ab], {type: mimeString});    
    }

    private uploadFiles() {
        this.fileUploadService.uploadFiles(this.url /* + '/' + this.blobId*/, this.files, this.headers).subscribe(
            (result: any) => {
                console.log('res', result);
            }
        );
    }

}