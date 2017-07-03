import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BoatsService {
    constructor(private http: Http) { }

    getBoats() {
        return this.http.get('/api/boats')
            .map(res => res.json());
    }
}