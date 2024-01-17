import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from "@angular/router";
import {AuthComponent} from "./components/auth/auth.component";
import {HomePageComponent} from "./pages/home/home-page.component";
import {RankingPageComponent} from "./pages/ranking/ranking-page.component";
import {PlaylistSortingPageComponent} from "./pages/playlist-sorting-page/playlist-sorting-page.component";


const routes: Routes = [
  {path: 'auth', component: AuthComponent},
  {path: 'ranking', component: RankingPageComponent},
  {path: 'sorting', component: PlaylistSortingPageComponent},
  {path: '**', component: HomePageComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
