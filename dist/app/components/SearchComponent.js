/*
 * Angular
 */
System.register(['angular2/core', 'angular2/common', 'angular2/router', '../services/SpotifyService'], function(exports_1, context_1) {
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
    var core_1, common_1, router_1, SpotifyService_1;
    var SearchComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (SpotifyService_1_1) {
                SpotifyService_1 = SpotifyService_1_1;
            }],
        execute: function() {
            SearchComponent = (function () {
                function SearchComponent(spotify, router, routeParams) {
                    this.spotify = spotify;
                    this.router = router;
                    this.routeParams = routeParams;
                }
                SearchComponent.prototype.ngOnInit = function () {
                    this.search();
                };
                SearchComponent.prototype.submit = function (query) {
                    this.router.navigate(['/Search', { query: query }]);
                    this.search();
                };
                SearchComponent.prototype.search = function () {
                    var _this = this;
                    this.query = this.routeParams.get('query');
                    if (!this.query) {
                        return;
                    }
                    this.spotify
                        .searchTrack(this.query)
                        .subscribe(function (res) { return _this.renderResults(res); });
                };
                SearchComponent.prototype.renderResults = function (res) {
                    this.results = null;
                    if (res && res.tracks && res.tracks.items) {
                        this.results = res.tracks.items;
                    }
                };
                SearchComponent = __decorate([
                    core_1.Component({
                        selector: 'search',
                        directives: [router_1.RouterLink, common_1.CORE_DIRECTIVES],
                        template: "\n  <h1>Search</h1>\n\n  <p>\n    <input type=\"text\" #newquery\n      [value]=\"query\"\n      (keydown.enter)=\"submit(newquery.value)\">\n    <button (click)=\"submit(newquery.value)\">Search</button>\n  </p>\n  <div *ngIf=\"results\">\n    <div *ngIf=\"!results.length\">\n        No tracks were found with the term '{{ query }}'\n    </div>\n    <div *ngIf=\"results.length\">\n        <h1>Results</h1>\n        <div class=\"row\">\n            <div class=\"col-sm-6 col-md-4\" *ngFor=\"#t of results\">\n                <div class=\"thumbnail\">\n                    <div class=\"content\">\n                        <img src=\"{{ t.album.images[0].url }}\" class=\"img-responsive\">\n                        <div class=\"caption\">\n                            <h3><a [routerLink]=\"['/Artist', {id: t.artists[0].id}]\">{{ t.artists[0].name }}</a></h3>\n                            <br>\n                            <p><a [routerLink]=\"['/Tracks', {id: t.id}]\">{{ t.name }}</a></p>\n                        </div>\n                    <div class=\"attribution\">\n                        <h4><a [routerLink]=\"['/Album', {id: t.album.id}]\">{{ t.album.name }}</a></h4>\n                    </div>\n                </div>\n            </div>\n        </div>\n     </div>\n</div>\n</div>\n  "
                    }), 
                    __metadata('design:paramtypes', [SpotifyService_1.SpotifyService, router_1.Router, router_1.RouteParams])
                ], SearchComponent);
                return SearchComponent;
            }());
            exports_1("SearchComponent", SearchComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL1NlYXJjaENvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBd0RIO2dCQUlFLHlCQUFtQixPQUF1QixFQUFTLE1BQWMsRUFDOUMsV0FBd0I7b0JBRHhCLFlBQU8sR0FBUCxPQUFPLENBQWdCO29CQUFTLFdBQU0sR0FBTixNQUFNLENBQVE7b0JBQzlDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO2dCQUMzQyxDQUFDO2dCQUVELGtDQUFRLEdBQVI7b0JBQ0UsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUNoQixDQUFDO2dCQUVELGdDQUFNLEdBQU4sVUFBTyxLQUFhO29CQUNsQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsRUFBRSxFQUFDLEtBQUssRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2xELElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDaEIsQ0FBQztnQkFFRCxnQ0FBTSxHQUFOO29CQUFBLGlCQVNDO29CQVJDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQzNDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7d0JBQ2hCLE1BQU0sQ0FBQztvQkFDVCxDQUFDO29CQUVELElBQUksQ0FBQyxPQUFPO3lCQUNULFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO3lCQUN2QixTQUFTLENBQUMsVUFBQyxHQUFRLElBQUssT0FBQSxLQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxFQUF2QixDQUF1QixDQUFDLENBQUM7Z0JBQ3RELENBQUM7Z0JBRUQsdUNBQWEsR0FBYixVQUFjLEdBQVE7b0JBQ3BCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO29CQUNwQixFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLE1BQU0sSUFBSSxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7d0JBQzFDLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7b0JBQ2xDLENBQUM7Z0JBQ0gsQ0FBQztnQkF4RUg7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVCxRQUFRLEVBQUUsUUFBUTt3QkFDbEIsVUFBVSxFQUFFLENBQUMsbUJBQVUsRUFBRSx3QkFBZSxDQUFDO3dCQUN6QyxRQUFRLEVBQUUsb3hDQWtDVDtxQkFDRixDQUFDOzttQ0FBQTtnQkFtQ0Ysc0JBQUM7WUFBRCxDQWxDQSxBQWtDQyxJQUFBO1lBbENELDZDQWtDQyxDQUFBIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL1NlYXJjaENvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBBbmd1bGFyXG4gKi9cblxuaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0NPUkVfRElSRUNUSVZFU30gZnJvbSAnYW5ndWxhcjIvY29tbW9uJztcbmltcG9ydCB7SHR0cCwgSFRUUF9QUk9WSURFUlN9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xuXG5pbXBvcnQge1xuICBSb3V0ZXIsXG4gIFJvdXRlckxpbmssXG4gIFJvdXRlUGFyYW1zLFxufSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuXG4vKlxuICogU2VydmljZXNcbiAqL1xuaW1wb3J0IHtTcG90aWZ5U2VydmljZX0gZnJvbSAnLi4vc2VydmljZXMvU3BvdGlmeVNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZWFyY2gnLFxuICBkaXJlY3RpdmVzOiBbUm91dGVyTGluaywgQ09SRV9ESVJFQ1RJVkVTXSxcbiAgdGVtcGxhdGU6IGBcbiAgPGgxPlNlYXJjaDwvaDE+XG5cbiAgPHA+XG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI25ld3F1ZXJ5XG4gICAgICBbdmFsdWVdPVwicXVlcnlcIlxuICAgICAgKGtleWRvd24uZW50ZXIpPVwic3VibWl0KG5ld3F1ZXJ5LnZhbHVlKVwiPlxuICAgIDxidXR0b24gKGNsaWNrKT1cInN1Ym1pdChuZXdxdWVyeS52YWx1ZSlcIj5TZWFyY2g8L2J1dHRvbj5cbiAgPC9wPlxuICA8ZGl2ICpuZ0lmPVwicmVzdWx0c1wiPlxuICAgIDxkaXYgKm5nSWY9XCIhcmVzdWx0cy5sZW5ndGhcIj5cbiAgICAgICAgTm8gdHJhY2tzIHdlcmUgZm91bmQgd2l0aCB0aGUgdGVybSAne3sgcXVlcnkgfX0nXG4gICAgPC9kaXY+XG4gICAgPGRpdiAqbmdJZj1cInJlc3VsdHMubGVuZ3RoXCI+XG4gICAgICAgIDxoMT5SZXN1bHRzPC9oMT5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS02IGNvbC1tZC00XCIgKm5nRm9yPVwiI3Qgb2YgcmVzdWx0c1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aHVtYm5haWxcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwie3sgdC5hbGJ1bS5pbWFnZXNbMF0udXJsIH19XCIgY2xhc3M9XCJpbWctcmVzcG9uc2l2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcHRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+PGEgW3JvdXRlckxpbmtdPVwiWycvQXJ0aXN0Jywge2lkOiB0LmFydGlzdHNbMF0uaWR9XVwiPnt7IHQuYXJ0aXN0c1swXS5uYW1lIH19PC9hPjwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxhIFtyb3V0ZXJMaW5rXT1cIlsnL1RyYWNrcycsIHtpZDogdC5pZH1dXCI+e3sgdC5uYW1lIH19PC9hPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYXR0cmlidXRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoND48YSBbcm91dGVyTGlua109XCJbJy9BbGJ1bScsIHtpZDogdC5hbGJ1bS5pZH1dXCI+e3sgdC5hbGJ1bS5uYW1lIH19PC9hPjwvaDQ+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICA8L2Rpdj5cbjwvZGl2PlxuPC9kaXY+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgU2VhcmNoQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcXVlcnk6IHN0cmluZztcbiAgcmVzdWx0czogT2JqZWN0O1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBzcG90aWZ5OiBTcG90aWZ5U2VydmljZSwgcHVibGljIHJvdXRlcjogUm91dGVyLFxuICAgICAgICAgICAgICBwdWJsaWMgcm91dGVQYXJhbXM6IFJvdXRlUGFyYW1zKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNlYXJjaCgpO1xuICB9XG5cbiAgc3VibWl0KHF1ZXJ5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9TZWFyY2gnLCB7cXVlcnk6IHF1ZXJ5fV0pO1xuICAgIHRoaXMuc2VhcmNoKCk7XG4gIH1cblxuICBzZWFyY2goKTogdm9pZCB7XG4gICAgdGhpcy5xdWVyeSA9IHRoaXMucm91dGVQYXJhbXMuZ2V0KCdxdWVyeScpO1xuICAgIGlmICghdGhpcy5xdWVyeSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc3BvdGlmeVxuICAgICAgLnNlYXJjaFRyYWNrKHRoaXMucXVlcnkpXG4gICAgICAuc3Vic2NyaWJlKChyZXM6IGFueSkgPT4gdGhpcy5yZW5kZXJSZXN1bHRzKHJlcykpO1xuICB9XG5cbiAgcmVuZGVyUmVzdWx0cyhyZXM6IGFueSk6IHZvaWQge1xuICAgIHRoaXMucmVzdWx0cyA9IG51bGw7XG4gICAgaWYgKHJlcyAmJiByZXMudHJhY2tzICYmIHJlcy50cmFja3MuaXRlbXMpIHtcbiAgICAgIHRoaXMucmVzdWx0cyA9IHJlcy50cmFja3MuaXRlbXM7XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
