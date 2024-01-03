import {APP_INITIALIZER, NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {AppRoutingModule} from "./app-routing.module";
import {HeaderComponent} from "./layout/header/header.component";
import {HttpClientModule} from "@angular/common/http";
import {FooterComponent} from "./layout/footer/footer.component";
import {LoginService} from "./services/login/login.service";
import {EMPTY} from "rxjs";

export function initPckeAuth(loginService: LoginService) {
  loginService.initialize().then()
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
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initPckeAuth,
      deps: [LoginService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
