import * as async from 'async';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class PipFileUploadService {

    public constructor(
        private http: HttpClient
    ) { }


    public uploadFiles(url: string, collection: any[], headers: any = {}): Observable<any> {
        const result$: Subject<any> = new Subject<any>();
        const result: any = { ids: [] };

        async.eachOf(collection, (item, index, callback) => {
            const fd: FormData = new FormData();
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
                const data = response.json();
                result.ids[index] = data.id;
                callback();
            }, (error: any) => {
                callback(error);
            });
        }, (error) => {
            if (error) {
                result$.error(error);
            } else
                if (collection.length === 0) {
                    setTimeout(() => {
                        result$.next(result);
                    }, 50);
                } else {
                    result$.next(result);
                }
        });

        return result$;
    }
}
