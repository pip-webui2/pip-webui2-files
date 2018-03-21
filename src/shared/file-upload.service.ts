import * as async from 'async';

import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { build$ } from 'protractor/built/element';

@Injectable()
export class PipFileUploadService {

    public constructor(
        private http: Http
    ) { }


    public uploadFiles(url: string, collection: any[], headers: any = {}): Observable<any> {
        let result$: Subject<any> = new Subject<any>();
        let result: any = { ids: [] };

        async.eachOf(collection, (item, index, callback) => {
            let fd: FormData = new FormData();
            fd.append('item.fileName', item.file, item.fileName);

            this.http.post(url, fd, <any>{
                uploadEventHandlers: {
                    progress: (e: any) => {
                        if (e.lengthComputable) {
                            collection[index].progress = (e.loaded / e.total) * 100;
                        }
                    }
                },
                headers: headers
            }).subscribe((response: any) => {
                let data = response.json();
                result.ids[index] = data.id;
                callback();
            })
        }, (error) => {
            if (collection.length == 0) {
                setTimeout(() => {
                    result$.next(result);
                }, 50)
            } else {
                result$.next(result);
            }
        });

        return result$;
    }

}
