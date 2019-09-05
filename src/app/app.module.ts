import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';
import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {NewsFeedService} from './domain/apiResponse/service';
import {CargoInterceptor} from './infrastructure/interceptor/cargo';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        HttpClientModule,
        NoopAnimationsModule
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {
            provide: RouteReuseStrategy,
            useClass: IonicRouteStrategy
        },
        NewsFeedService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: CargoInterceptor,
            multi: true
        },
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
