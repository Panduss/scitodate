import { Component, OnInit } from '@angular/core';
import { NewsFeedService } from '../../domain/newsFeed/service';
import { AuthorPrototype } from '../../domain/author/prototype';
import { NewsFeedPrototype } from '../../domain/newsFeed/prototype';
import { TermIndexPrototype } from '../../domain/termIndex/prototype';
import { PapersPrototype } from '../../domain/papers/prototype';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-authors',
    templateUrl: '../../templates/pages/authors.html',
    styleUrls: ['../../styles/pages/authors.scss']
})
class Authors implements OnInit {

    public authorPrototype?: AuthorPrototype;
    private apiResponsePrototype?: NewsFeedPrototype;
    private date = {
        year: '2019',
        month: '06'
    };

    public constructor(
        private newsFeedService: NewsFeedService,
        private router: Router,
        private route: ActivatedRoute
    ) {
    }

    public ngOnInit() {
        this.route.paramMap.subscribe(
            (params) => {

                const id = params.get('id');

                if (id) {
                    this.newsFeedService.getAuthors(id).subscribe(
                        (apiResponsePrototype: NewsFeedPrototype) => {
                            this.apiResponsePrototype = apiResponsePrototype;
                            this.authorPrototype = apiResponsePrototype.authors;
                        }
                    );
                }
            }, (error) => {
                alert('An error occurred, please try again later!');
                throw error;
            }
        );
    }

    public getPapersForEachAuthor(authorPrototype: AuthorPrototype): Array<PapersPrototype> | null {

        const papers: Array<PapersPrototype> = authorPrototype.papers;

        if (papers) {

            const dateFilter = this.date.year + '-' + this.date.month;
            return papers.filter((item: PapersPrototype) => {

                if (item.date) {
                    return (item.date.indexOf(dateFilter) !== -1);
                }
            });
        } else {

            return null;
        }

    }

    public getTermIndexesForEachAuthor(authorPrototype: AuthorPrototype): Array<TermIndexPrototype>|null {
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
        } else {

            return null;
        }
    }

    public openPublication(publicationUrl: string): void {
        this.router.navigate(['publication', { link: publicationUrl }]);
    }
}

export { Authors as AuthorsPage };
