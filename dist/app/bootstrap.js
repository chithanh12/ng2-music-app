System.register(['angular2/core', 'angular2/platform/browser', 'angular2/http', 'angular2/router', './services/SpotifyService', './components/HomeComponent', './components/AboutComponent', './components/SearchComponent', './components/TrackComponent'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, browser_1, http_1, router_1, SpotifyService_1, HomeComponent_1, AboutComponent_1, SearchComponent_1, TrackComponent_1;
    var MusicApp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (SpotifyService_1_1) {
                SpotifyService_1 = SpotifyService_1_1;
            },
            function (HomeComponent_1_1) {
                HomeComponent_1 = HomeComponent_1_1;
            },
            function (AboutComponent_1_1) {
                AboutComponent_1 = AboutComponent_1_1;
            },
            function (SearchComponent_1_1) {
                SearchComponent_1 = SearchComponent_1_1;
            },
            function (TrackComponent_1_1) {
                TrackComponent_1 = TrackComponent_1_1;
            }],
        execute: function() {
            MusicApp = (function () {
                function MusicApp() {
                }
                MusicApp = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        template: "<div>\n    <nav>\n        <a>Navigation:</a>\n        <ul>\n            <li><a [routerLink]=\"['/Home']\">Home</a></li>\n            <li><a [routerLink]=\"['/Search']\">Search</a></li>\n            <li><a [routerLink]=\"['/About']\">About</a></li>\n        </ul>\n    </nav>\n    <router-outlet></router-outlet>\n</div>"
                    }),
                    router_1.RouteConfig([
                        { path: '/', name: 'root', redirectTo: ['/Home'] },
                        { path: '/home', name: 'Home', component: HomeComponent_1.HomeComponent },
                        { path: '/search', name: 'Search', component: SearchComponent_1.SearchComponent },
                        { path: '/about', name: 'About', component: AboutComponent_1.AboutComponent },
                        { path: '/artist/:id', name: 'Artist', component: SearchComponent_1.SearchComponent },
                        { path: '/album/:id', name: 'Album', component: AboutComponent_1.AboutComponent },
                        { path: '/tracks/:id', name: 'Tracks', component: TrackComponent_1.TrackComponent },
                    ]), 
                    __metadata('design:paramtypes', [])
                ], MusicApp);
                return MusicApp;
            }());
            exports_1("MusicApp", MusicApp);
            browser_1.bootstrap(MusicApp, [
                router_1.ROUTER_PROVIDERS,
                http_1.HTTP_PROVIDERS,
                SpotifyService_1.SPOTIFY_PROVIDERS,
                core_1.provide(router_1.ROUTER_PRIMARY_COMPONENT, { useValue: MusicApp }),
                core_1.provide(router_1.APP_BASE_HREF, { useValue: '/' }),
                core_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy })
            ]).catch(function (err) { return console.error(err); });
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ib290c3RyYXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFpREE7Z0JBR0U7Z0JBQ0EsQ0FBQztnQkE3Qkg7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVixRQUFRLEVBQUUsUUFBUTt3QkFDbEIsVUFBVSxFQUFFLENBQUMsMEJBQWlCLENBQUM7d0JBQzVCLFFBQVEsRUFBRSxpVUFVUDtxQkFFTixDQUFDO29CQUNELG9CQUFXLENBQUM7d0JBQ2IsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUU7d0JBQ2xELEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSw2QkFBYSxFQUFFO3dCQUN6RCxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsaUNBQWUsRUFBRTt3QkFDL0QsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLCtCQUFjLEVBQUU7d0JBQzVELEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxpQ0FBZSxFQUFFO3dCQUNuRSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsK0JBQWMsRUFBRTt3QkFDaEUsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLCtCQUFjLEVBQUU7cUJBQ2pFLENBQUM7OzRCQUFBO2dCQU1GLGVBQUM7WUFBRCxDQUxBLEFBS0MsSUFBQTtZQUxELCtCQUtDLENBQUE7WUFDRCxtQkFBUyxDQUFDLFFBQVEsRUFBRTtnQkFDakIseUJBQWdCO2dCQUNqQixxQkFBYztnQkFDZCxrQ0FBaUI7Z0JBQ2pCLGNBQU8sQ0FBQyxpQ0FBd0IsRUFBRSxFQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUMsQ0FBQztnQkFDdkQsY0FBTyxDQUFDLHNCQUFhLEVBQWEsRUFBQyxRQUFRLEVBQUUsR0FBRyxFQUFDLENBQUM7Z0JBQ2xELGNBQU8sQ0FBQyx5QkFBZ0IsRUFBVSxFQUFDLFFBQVEsRUFBRSw2QkFBb0IsRUFBQyxDQUFDO2FBQ3BFLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQyxHQUFRLElBQUssT0FBQSxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFsQixDQUFrQixDQUFDLENBQUMiLCJmaWxlIjoiYXBwL2Jvb3RzdHJhcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ub2RlX21vZHVsZXMvYW5ndWxhcjIvdHlwaW5ncy9icm93c2VyLmQudHNcIiAvPlxuaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBwcm92aWRlXG59IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtib290c3RyYXB9IGZyb20gJ2FuZ3VsYXIyL3BsYXRmb3JtL2Jyb3dzZXInO1xuaW1wb3J0IHtIVFRQX1BST1ZJREVSU30gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XG5pbXBvcnQge1xuICBBUFBfQkFTRV9IUkVGLFxuICBST1VURVJfRElSRUNUSVZFUyxcbiAgUk9VVEVSX1BST1ZJREVSUyxcbiAgUk9VVEVSX1BSSU1BUllfQ09NUE9ORU5ULFxuICBIYXNoTG9jYXRpb25TdHJhdGVneSxcbiAgTG9jYXRpb25TdHJhdGVneSxcbiAgUm91dGVyLFxuICBSb3V0ZUNvbmZpZyxcbn0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbiBpbXBvcnQge1NQT1RJRllfUFJPVklERVJTfSBmcm9tICcuL3NlcnZpY2VzL1Nwb3RpZnlTZXJ2aWNlJztcbmltcG9ydCB7SG9tZUNvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL0hvbWVDb21wb25lbnQnXG5pbXBvcnQge0Fib3V0Q29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvQWJvdXRDb21wb25lbnQnXG5pbXBvcnQge1NlYXJjaENvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL1NlYXJjaENvbXBvbmVudCdcbmltcG9ydCB7QXJ0aXN0Q29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvQXJ0aXN0Q29tcG9uZW50J1xuaW1wb3J0IHtBbGJ1bUNvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL0FsYnVtQ29tcG9uZW50J1xuaW1wb3J0IHtUcmFja0NvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL1RyYWNrQ29tcG9uZW50J1xuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnbXktYXBwJyxcblx0ZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXSxcbiAgICB0ZW1wbGF0ZTogYDxkaXY+XG4gICAgPG5hdj5cbiAgICAgICAgPGE+TmF2aWdhdGlvbjo8L2E+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICAgIDxsaT48YSBbcm91dGVyTGlua109XCJbJy9Ib21lJ11cIj5Ib21lPC9hPjwvbGk+XG4gICAgICAgICAgICA8bGk+PGEgW3JvdXRlckxpbmtdPVwiWycvU2VhcmNoJ11cIj5TZWFyY2g8L2E+PC9saT5cbiAgICAgICAgICAgIDxsaT48YSBbcm91dGVyTGlua109XCJbJy9BYm91dCddXCI+QWJvdXQ8L2E+PC9saT5cbiAgICAgICAgPC91bD5cbiAgICA8L25hdj5cbiAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XG48L2Rpdj5gXG5cdFxufSlcbkBSb3V0ZUNvbmZpZyhbXG57IHBhdGg6ICcvJywgbmFtZTogJ3Jvb3QnLCByZWRpcmVjdFRvOiBbJy9Ib21lJ10gfSxcbnsgcGF0aDogJy9ob21lJywgbmFtZTogJ0hvbWUnLCBjb21wb25lbnQ6IEhvbWVDb21wb25lbnQgfSxcbnsgcGF0aDogJy9zZWFyY2gnLCBuYW1lOiAnU2VhcmNoJywgY29tcG9uZW50OiBTZWFyY2hDb21wb25lbnQgfSxcbnsgcGF0aDogJy9hYm91dCcsIG5hbWU6ICdBYm91dCcsIGNvbXBvbmVudDogQWJvdXRDb21wb25lbnQgfSxcbnsgcGF0aDogJy9hcnRpc3QvOmlkJywgbmFtZTogJ0FydGlzdCcsIGNvbXBvbmVudDogU2VhcmNoQ29tcG9uZW50IH0sXG57IHBhdGg6ICcvYWxidW0vOmlkJywgbmFtZTogJ0FsYnVtJywgY29tcG9uZW50OiBBYm91dENvbXBvbmVudCB9LFxueyBwYXRoOiAnL3RyYWNrcy86aWQnLCBuYW1lOiAnVHJhY2tzJywgY29tcG9uZW50OiBUcmFja0NvbXBvbmVudCB9LFxuXSlcbmV4cG9ydCBjbGFzcyBNdXNpY0FwcCB7XG4gICAgcXVlcnk6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxufVxuYm9vdHN0cmFwKE11c2ljQXBwLCBbXG4gICBST1VURVJfUFJPVklERVJTLFxuICBIVFRQX1BST1ZJREVSUyxcbiAgU1BPVElGWV9QUk9WSURFUlMsXG4gIHByb3ZpZGUoUk9VVEVSX1BSSU1BUllfQ09NUE9ORU5ULCB7dXNlVmFsdWU6IE11c2ljQXBwfSksXG4gIHByb3ZpZGUoQVBQX0JBU0VfSFJFRiwgICAgICAgICAgICB7dXNlVmFsdWU6ICcvJ30pLFxuICBwcm92aWRlKExvY2F0aW9uU3RyYXRlZ3ksICAgICAgICAge3VzZUNsYXNzOiBIYXNoTG9jYXRpb25TdHJhdGVneX0pXG5dKS5jYXRjaCgoZXJyOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
