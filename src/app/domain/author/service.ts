import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiResponsePrototype } from '../apiResponse/prototype';
import { Observable } from 'rxjs';

@Injectable()
class Author {

    private url = 'https://assessment.scitodate.com/api/segment';

    public constructor(
        private http: HttpClient
    ) {
    }

    public getAuthors(): Observable<ApiResponsePrototype> {
        return this.http.get<ApiResponsePrototype>(`${this.url}/ac`);
    }
}

export { Author as AuthorService };
