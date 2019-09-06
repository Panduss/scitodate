import { Component, OnInit } from '@angular/core';
import { NewsFeedService } from '../../domain/newsFeed/service';
import { AuthorPrototype } from '../../domain/author/prototype';
import { NewsFeedPrototype } from '../../domain/newsFeed/prototype';
import { TermIndexPrototype } from '../../domain/termIndex/prototype';
import { PapersPrototype } from '../../domain/papers/prototype';

@Component({
    selector: 'app-list',
    templateUrl: '../../templates/pages/list.html'
})
class List implements OnInit {

    private month = '06';
    private year = '2019';
    public authorPrototype: AuthorPrototype;
    private apiResponsePrototype: NewsFeedPrototype;

    public constructor(
        private newsFeedService: NewsFeedService
    ) {
    }

    public ngOnInit() {
        this.newsFeedService.getAuthors('ac').subscribe(
            (apiResponsePrototype: NewsFeedPrototype) => {
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

            const filteredIndexTerms = termIndex.filter(
                (term) => {

                    if (term.highlights.length > 0) {
                        return term;
                    }
                }
            );

            return filteredIndexTerms.sort( (a, b) => {
                return b.highlights.length - a.highlights.length;
            });
        }
    }
}

export { List as ListPage };
