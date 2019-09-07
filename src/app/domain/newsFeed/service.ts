import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewsFeedPrototype } from './prototype';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable()
class NewsFeed {

    private url = environment.api.url;

    public constructor(
        private http: HttpClient
    ) {
    }

    public getAuthors(route: string): Observable<NewsFeedPrototype> {
        return this.http.get<NewsFeedPrototype>(`${this.url}/${route}`);
    }
}

export { NewsFeed as NewsFeedService };
