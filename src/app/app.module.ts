import {APP_INITIALIZER, NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {AppRoutingModule} from "./app-routing.module";
import {HeaderComponent} from "./layout/header/header.component";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FooterComponent} from "./layout/footer/footer.component";
import {EMPTY} from "rxjs";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {TokenInterceptor} from "./interceptors/token.interceptor";
import {PckeService} from "./services/pcke/pcke.service";

export function initPckeAuth(pckeService: PckeService) {
  pckeService.initialize().then()
  return () => EMPTY;
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HeaderComponent,
    FooterComponent,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initPckeAuth,
      deps: [PckeService],
      multi: true
    },
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
