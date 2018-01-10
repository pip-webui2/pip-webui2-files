import * as async from 'async';

import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class PipFileUploadService {

    public constructor(
        private http: Http
    ) { }


    public uploadFiles(url: string, collection: any[], session_id: string = null): Observable<any> {
        let result$: Subject<any> = new Subject<any>();
        let result: any = {ids: []};

        async.eachOf(collection, (item, index, callback) => {
            let fd: FormData = new FormData();

            this.http.put(url, fd, <any>{
                uploadEventHandlers: {
                    progress: (e: any) => {
                        if (e.lengthComputable) {
                            collection[index].progress = (e.loaded / e.total) * 100;
                        }
                    }
                },
                headers: {
                    'x-session-id': session_id
                }
            }).subscribe((response: any) => {
                result.ids.push(response.data);
                callback();
            })
        }, (error) => {
           result$.next(result); 
        });

        return result$;
    }

}