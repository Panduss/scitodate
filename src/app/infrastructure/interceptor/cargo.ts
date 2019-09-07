import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

@Injectable()
class Cargo implements HttpInterceptor {

    public intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        return next.handle(req).map(
            event => {
                if (event instanceof HttpResponse && event.body && event.body.data) {
                    return event.clone({ body: event.body.data });
                }
                return event;
            }
        );
    }
}

export { Cargo as CargoInterceptor };
