import { Component, OnInit } from '@angular/core';
import { NewsFeedService } from '../../domain/apiResponse/service';
import { AuthorPrototype } from '../../domain/author/prototype';
import { ApiResponsePrototype } from '../../domain/apiResponse/prototype';
import { TermIndexPrototype } from '../../domain/termIndex/prototype';
import { PapersPrototype } from '../../domain/papers/prototype';

@Component({
    selector: 'app-list',
    templateUrl: '../../templates/pages/list.html'
})
class List implements OnInit {

    private month = '06';
    private year = '2019';
    public authorPrototype?: AuthorPrototype;
    public apiResponsePrototype: ApiResponsePrototype;
    public constructor(
        private newsFeedService: NewsFeedService
    ) {
    }

    public ngOnInit() {
        this.newsFeedService.getAuthors().subscribe(
            (apiResponsePrototype: ApiResponsePrototype) => {
                this.apiResponsePrototype = apiResponsePrototype;
                this.authorPrototype  = apiResponsePrototype.authors;
            }
        );
    }

    public getPapersForEachAuthor(authorPrototype: AuthorPrototype): Array<PapersPrototype> {
        const papers: Array<PapersPrototype> = authorPrototype.papers;

        if (papers) {

            const dateFilter = this.year + '-' + this.month;
            const paper = papers.filter((item: PapersPrototype) => {

                if (item.date) {
                    return (item.date.indexOf(dateFilter) !== -1);
                }
            });

            return paper;
        }
    }

    public getTermIndexesForEachAuthor(authorPrototype: AuthorPrototype): Array<TermIndexPrototype> {
        const termIndex: Array<TermIndexPrototype> = Object.values(authorPrototype.matchedTerms.termIndex);

        if (termIndex) {

            return termIndex.filter(
                (term) => {

                    if (term.highlights.length > 0) {
                        return term;
                    }
                }
            );
        }
    }
}

export { List as ListPage };
