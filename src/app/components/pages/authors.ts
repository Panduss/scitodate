import { Component, OnInit } from '@angular/core';
import { NewsFeedService } from '../../domain/newsFeed/service';
import { AuthorPrototype } from '../../domain/author/prototype';
import { NewsFeedPrototype } from '../../domain/newsFeed/prototype';
import { TermIndexPrototype } from '../../domain/termIndex/prototype';
import { PapersPrototype } from '../../domain/papers/prototype';
import { Router } from '@angular/router';

@Component({
    selector: 'app-authors',
    templateUrl: '../../templates/pages/authors.html',
    styleUrls: ['../../styles/pages/authors.scss']
})
class Authors implements OnInit {

    public authorPrototype: AuthorPrototype;
    private month = '06';
    private year = '2019';
    private apiResponsePrototype: NewsFeedPrototype;

    public constructor(
        private newsFeedService: NewsFeedService,
        private router: Router
    ) {
    }

    public ngOnInit() {
        this.newsFeedService.getAuthors('ac').subscribe(
            (apiResponsePrototype: NewsFeedPrototype) => {
                this.apiResponsePrototype = apiResponsePrototype;
                this.authorPrototype = apiResponsePrototype.authors;
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

            return filteredIndexTerms.sort((a, b) => {
                return b.highlights.length - a.highlights.length;
            });
        }
    }

    public openPublication(publicationUrl: string): void {
        this.router.navigate([`publication`, { link: publicationUrl }]);
    }
}

export { Authors as AuthorsPage };
