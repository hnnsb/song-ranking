import { Routes } from '@angular/router';
import {AuthComponent} from "./components/auth/auth.component";
import {HomeComponent} from "./pages/home/home.component";
import {UserComponent} from "./pages/user/user.component";

export const routes: Routes = [
  { path: 'auth', component: AuthComponent},
  { path: 'me', component: UserComponent},
  { path: '**', component: HomeComponent}
];
