import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {CommonModule} from "@angular/common";
import {provideRouter, RouterLink, RouterOutlet} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {AuthComponent} from "./components/auth/auth.component";
import {routes} from "./app.routes";

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterOutlet,
    HttpClientModule,
    RouterLink,

  ],
  providers: [provideRouter(routes)],
  bootstrap: [AppComponent]
})
export class AppModule {
}
