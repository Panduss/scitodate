import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
class Loading implements HttpInterceptor {
    private loader?: HTMLIonLoadingElement;

    constructor(
        private loadingController: LoadingController
    ) {
    }

    public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        this.createLoader();

        return next.handle(request).map((event) => {
            this.dismissLoader();
            return event;
        });
    }

    private async createLoader(): Promise<void> {
        this.loader = await this.loadingController.create({
            spinner: 'circles',
            cssClass: 'loading-controller',
            translucent: true,
            animated: true,
            duration: 5000,
        });
        await this.loader.present();
    }

    private async dismissLoader(): Promise<void> {
        if (this.loader) {
            await this.loader.dismiss();
        }
    }
}

export { Loading as LoadingInterceptor };
