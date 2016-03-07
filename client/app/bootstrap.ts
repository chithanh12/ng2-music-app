/// <reference path="../../node_modules/angular2/typings/browser.d.ts" />
import {
  Component,
  provide
} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {HTTP_PROVIDERS} from 'angular2/http';
import {
  APP_BASE_HREF,
  ROUTER_DIRECTIVES,
  ROUTER_PROVIDERS,
  ROUTER_PRIMARY_COMPONENT,
  HashLocationStrategy,
  LocationStrategy,
  Router,
  RouteConfig,
} from 'angular2/router';
 import {SPOTIFY_PROVIDERS} from './services/SpotifyService';
import {HomeComponent} from './components/HomeComponent'
import {AboutComponent} from './components/AboutComponent'
import {SearchComponent} from './components/SearchComponent'
import {ArtistComponent} from './components/ArtistComponent'
import {AlbumComponent} from './components/AlbumComponent'
import {TrackComponent} from './components/TrackComponent'
@Component({
	selector: 'my-app',
	directives: [ROUTER_DIRECTIVES],
    template: `<div>
    <nav>
        <a>Navigation:</a>
        <ul>
            <li><a [routerLink]="['/Home']">Home</a></li>
            <li><a [routerLink]="['/Search']">Search</a></li>
            <li><a [routerLink]="['/About']">About</a></li>
        </ul>
    </nav>
    <router-outlet></router-outlet>
</div>`
	
})
@RouteConfig([
{ path: '/', name: 'root', redirectTo: ['/Home'] },
{ path: '/home', name: 'Home', component: HomeComponent },
{ path: '/search', name: 'Search', component: SearchComponent },
{ path: '/about', name: 'About', component: AboutComponent },
{ path: '/artist/:id', name: 'Artist', component: SearchComponent },
{ path: '/album/:id', name: 'Album', component: AboutComponent },
{ path: '/tracks/:id', name: 'Tracks', component: TrackComponent },
])
export class MusicApp {
    query: string;

  constructor() {
  }
}
bootstrap(MusicApp, [
   ROUTER_PROVIDERS,
  HTTP_PROVIDERS,
  SPOTIFY_PROVIDERS,
  provide(ROUTER_PRIMARY_COMPONENT, {useValue: MusicApp}),
  provide(APP_BASE_HREF,            {useValue: '/'}),
  provide(LocationStrategy,         {useClass: HashLocationStrategy})
]).catch((err: any) => console.error(err));