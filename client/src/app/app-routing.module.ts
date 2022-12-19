import { Injectable, NgModule } from '@angular/core';
import { ActivatedRouteSnapshot, RouterModule, RouterStateSnapshot, Routes, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { HomeComponent } from './home/home.component';
import { LoginService } from './login.service';
import { LoginComponent } from './login/login.component';
import { MyMusicComponent } from './my-music/my-music.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

//////////////////////
interface CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
}


@Injectable()
class CanActivateMyMusic implements CanActivate {
  constructor() { };
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return LoginService.isLoggedIn;
  }
}


const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "my",
    component: MyMusicComponent,
    canActivate: [CanActivateMyMusic]
  },
  {
    path: "discover",
    loadChildren: () => import("./discover/discover.module").then(m => m.DiscoverModule)
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "**",
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    CanActivateMyMusic
  ]
})
export class AppRoutingModule { }
