import { Component, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-publication',
    templateUrl: '../../templates/pages/publication.html',
    styleUrls: ['../../styles/pages/publication.scss']
})
export class Publication implements OnInit, OnDestroy {

    public safeLink?: SafeUrl;
    private paramSubscription: Subscription = new Subscription();

    public constructor(
        public route: ActivatedRoute,
        public sanitizer: DomSanitizer
    ) {
    }

    public ngOnInit(): void {
        this.paramSubscription = this.route.paramMap.subscribe(
            (params) => {

                const link = params.get('link');

                if (link) {
                    this.safeLink = this.sanitizer.bypassSecurityTrustResourceUrl(link);
                }
            }
        );
    }

    public ngOnDestroy(): void {
        this.paramSubscription.unsubscribe();
    }
}

export { Publication as PublicationPage };
