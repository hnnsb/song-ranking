import {APP_INITIALIZER, Injector, NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {AppRoutingModule} from "./app-routing.module";
import {HeaderComponent} from "./layout/header/header.component";
import {HttpClientModule} from "@angular/common/http";
import {FooterComponent} from "./layout/footer/footer.component";
import {LoginService} from "./services/login/login.service";
import {EMPTY} from "rxjs";
import {AngularRenderer} from "@storybook/angular";
import {DecoratorFunction} from "@storybook/types";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

export function initPckeAuth(loginService: LoginService) {
  loginService.initialize().then()
  return () => EMPTY;
}


export function injectInjectorToProps<TArgs = unknown>(): DecoratorFunction<AngularRenderer, TArgs> {
  return (storyFn: () => any) => {
    const story = storyFn();
    if (!story.applicationConfig) {
      story.applicationConfig = {providers: []};
    }

    story.applicationConfig.providers.push({
      provide: APP_INITIALIZER,
      useFactory: (injector: Injector): void => {
        if (!story.props) {
          story.props = {injector};
        }
        Object.assign(story.props, {injector});
      },
      deps: [Injector]
    });
    return story;
  };
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
      deps: [LoginService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
