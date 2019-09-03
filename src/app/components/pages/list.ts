import {Component, OnInit} from '@angular/core';
import { AuthorService } from '../../domain/author/service';
import { AuthorPrototype } from '../../domain/author/prototype';
import { ApiResponsePrototype } from '../../domain/apiResponse/prototype';
import { TermIndexPrototype } from '../../domain/termIndex/prototype';

@Component({
    selector: 'app-list',
    templateUrl: '../../templates/pages/list.html'
})
class List implements OnInit {

    public authorPrototype?: AuthorPrototype;
    public apiResponsePrototype: ApiResponsePrototype;

    public constructor(
        private authorService: AuthorService
    ) {
    }

    public ngOnInit() {
        this.authorService.getAuthors().subscribe(
            (apiResponsePrototype: ApiResponsePrototype) => {
                this.apiResponsePrototype = apiResponsePrototype;
                this.authorPrototype  = apiResponsePrototype.authors;
            }
        );
    }

    public getTermIndexesForEachAuthor(authorPrototype: AuthorPrototype) {
        const termIndex: TermIndexPrototype = authorPrototype.matchedTerms.termIndex as TermIndexPrototype;

        if (termIndex) {
            console.log(termIndex);
        }
    }
}

export { List as ListPage };
