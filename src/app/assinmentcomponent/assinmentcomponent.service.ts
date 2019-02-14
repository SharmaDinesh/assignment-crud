import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AssinmentcomponentService {
    constructor(private  httpClient: HttpClient) { }

     // Api Call //
    getAssignmentData() {
        return  this.httpClient.get('https://hn.algolia.com/api/v1/search_by_date?tags=story');
    }
}