import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from "@angular/router";
import {AuthComponent} from "./components/auth/auth.component";
import {UserComponent} from "./pages/user/user.component";
import {HomeComponent} from "./pages/home/home.component";


const routes: Routes = [
  {path: 'auth', component: AuthComponent},
  {path: 'me', component: UserComponent},
  {path: '**', component: HomeComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
