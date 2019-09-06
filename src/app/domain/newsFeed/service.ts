import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewsFeedPrototype } from './prototype';
import { Observable } from 'rxjs';

@Injectable()
class NewsFeed {

    private url = 'https://assessment.scitodate.com/api/segment';

    public constructor(
        private http: HttpClient
    ) {
    }

    public getAuthors(route: string): Observable<NewsFeedPrototype> {
        return this.http.get<NewsFeedPrototype>(`${this.url}/${route}`);
    }
}

export { NewsFeed as NewsFeedService };
