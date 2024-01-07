import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from "@angular/router";
import {AuthComponent} from "./components/auth/auth.component";
import {PlaylistsPage} from "./pages/playlists/playlists-page.component";
import {HomePageComponent} from "./pages/home/home-page.component";
import {RankingPageComponent} from "./pages/ranking/ranking-page.component";


const routes: Routes = [
  {path: 'auth', component: AuthComponent},
  {
    path: 'ranking', children: [
      {path: 'playlists', component: PlaylistsPage},
      {path: 'songs', component: RankingPageComponent}
    ]
  },
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
