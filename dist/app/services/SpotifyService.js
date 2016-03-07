System.register(['angular2/core', 'angular2/http', 'rxjs/Rx'], function(exports_1, context_1) {
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
    var core_1, http_1;
    var SpotifyService, SPOTIFY_PROVIDERS;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            /**
             * SpotifyService works querying the Spotify Web API
             * https://developer.spotify.com/web-api/
             */
            SpotifyService = (function () {
                function SpotifyService(http) {
                    this.http = http;
                }
                SpotifyService.prototype.query = function (URL, params) {
                    var queryURL = "" + SpotifyService.BASE_URL + URL;
                    if (params) {
                        queryURL = queryURL + "?" + params.join('&');
                    }
                    return this.http.request(queryURL).map(function (res) { return res.json(); });
                };
                SpotifyService.prototype.search = function (query, type) {
                    return this.query("/search", [
                        ("q=" + query),
                        ("type=" + type)
                    ]);
                };
                SpotifyService.prototype.searchTrack = function (query) {
                    return this.search(query, 'track');
                };
                SpotifyService.prototype.getTrack = function (id) {
                    return this.query("/tracks/" + id);
                };
                SpotifyService.prototype.getArtist = function (id) {
                    return this.query("/artists/" + id);
                };
                SpotifyService.prototype.getAlbum = function (id) {
                    return this.query("/albums/" + id);
                };
                SpotifyService.BASE_URL = 'https://api.spotify.com/v1';
                SpotifyService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], SpotifyService);
                return SpotifyService;
            }());
            exports_1("SpotifyService", SpotifyService);
            exports_1("SPOTIFY_PROVIDERS", SPOTIFY_PROVIDERS = [
                core_1.provide(SpotifyService, { useClass: SpotifyService })
            ]);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zZXJ2aWNlcy9TcG90aWZ5U2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O3dCQW1EVyxpQkFBaUI7Ozs7Ozs7Ozs7O1lBN0M1Qjs7O2VBR0c7WUFHSDtnQkFHRSx3QkFBbUIsSUFBVTtvQkFBVixTQUFJLEdBQUosSUFBSSxDQUFNO2dCQUM3QixDQUFDO2dCQUVELDhCQUFLLEdBQUwsVUFBTSxHQUFXLEVBQUUsTUFBc0I7b0JBQ3ZDLElBQUksUUFBUSxHQUFXLEtBQUcsY0FBYyxDQUFDLFFBQVEsR0FBRyxHQUFLLENBQUM7b0JBQzFELEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7d0JBQ1gsUUFBUSxHQUFNLFFBQVEsU0FBSSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBRyxDQUFDO29CQUMvQyxDQUFDO29CQUVELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQyxHQUFRLElBQUssT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUM7Z0JBQ25FLENBQUM7Z0JBRUQsK0JBQU0sR0FBTixVQUFPLEtBQWEsRUFBRSxJQUFZO29CQUNoQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUU7d0JBQzNCLFFBQUssS0FBSyxDQUFFO3dCQUNaLFdBQVEsSUFBSSxDQUFFO3FCQUNmLENBQUMsQ0FBQztnQkFDTCxDQUFDO2dCQUVELG9DQUFXLEdBQVgsVUFBWSxLQUFhO29CQUN2QixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7Z0JBQ3JDLENBQUM7Z0JBRUQsaUNBQVEsR0FBUixVQUFTLEVBQVU7b0JBQ2pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQVcsRUFBSSxDQUFDLENBQUM7Z0JBQ3JDLENBQUM7Z0JBRUQsa0NBQVMsR0FBVCxVQUFVLEVBQVU7b0JBQ2xCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQVksRUFBSSxDQUFDLENBQUM7Z0JBQ3RDLENBQUM7Z0JBRUQsaUNBQVEsR0FBUixVQUFTLEVBQVU7b0JBQ2pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQVcsRUFBSSxDQUFDLENBQUM7Z0JBQ3JDLENBQUM7Z0JBbkNNLHVCQUFRLEdBQVcsNEJBQTRCLENBQUM7Z0JBRnpEO29CQUFDLGlCQUFVLEVBQUU7O2tDQUFBO2dCQXNDYixxQkFBQztZQUFELENBckNBLEFBcUNDLElBQUE7WUFyQ0QsMkNBcUNDLENBQUE7WUFFVSwrQkFBQSxpQkFBaUIsR0FBZTtnQkFDekMsY0FBTyxDQUFDLGNBQWMsRUFBRSxFQUFDLFFBQVEsRUFBRSxjQUFjLEVBQUMsQ0FBQzthQUNwRCxDQUFBLENBQUMiLCJmaWxlIjoiYXBwL3NlcnZpY2VzL1Nwb3RpZnlTZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlLCBwcm92aWRlLCBJbmplY3R9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtIdHRwLCBIVFRQX1BST1ZJREVSU30gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5cbmltcG9ydCAncnhqcy9SeCc7XG5cbi8qKlxuICogU3BvdGlmeVNlcnZpY2Ugd29ya3MgcXVlcnlpbmcgdGhlIFNwb3RpZnkgV2ViIEFQSVxuICogaHR0cHM6Ly9kZXZlbG9wZXIuc3BvdGlmeS5jb20vd2ViLWFwaS9cbiAqL1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3BvdGlmeVNlcnZpY2Uge1xuICBzdGF0aWMgQkFTRV9VUkw6IHN0cmluZyA9ICdodHRwczovL2FwaS5zcG90aWZ5LmNvbS92MSc7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGh0dHA6IEh0dHApIHtcbiAgfVxuXG4gIHF1ZXJ5KFVSTDogc3RyaW5nLCBwYXJhbXM/OiBBcnJheTxzdHJpbmc+KTogT2JzZXJ2YWJsZTxhbnlbXT4ge1xuICAgIGxldCBxdWVyeVVSTDogc3RyaW5nID0gYCR7U3BvdGlmeVNlcnZpY2UuQkFTRV9VUkx9JHtVUkx9YDtcbiAgICBpZiAocGFyYW1zKSB7XG4gICAgICBxdWVyeVVSTCA9IGAke3F1ZXJ5VVJMfT8ke3BhcmFtcy5qb2luKCcmJyl9YDtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLnJlcXVlc3QocXVlcnlVUkwpLm1hcCgocmVzOiBhbnkpID0+IHJlcy5qc29uKCkpO1xuICB9XG5cbiAgc2VhcmNoKHF1ZXJ5OiBzdHJpbmcsIHR5cGU6IHN0cmluZyk6IE9ic2VydmFibGU8YW55W10+IHtcbiAgICByZXR1cm4gdGhpcy5xdWVyeShgL3NlYXJjaGAsIFtcbiAgICAgIGBxPSR7cXVlcnl9YCxcbiAgICAgIGB0eXBlPSR7dHlwZX1gXG4gICAgXSk7XG4gIH1cblxuICBzZWFyY2hUcmFjayhxdWVyeTogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnlbXT4ge1xuICAgIHJldHVybiB0aGlzLnNlYXJjaChxdWVyeSwgJ3RyYWNrJyk7XG4gIH1cblxuICBnZXRUcmFjayhpZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnlbXT4ge1xuICAgIHJldHVybiB0aGlzLnF1ZXJ5KGAvdHJhY2tzLyR7aWR9YCk7XG4gIH1cblxuICBnZXRBcnRpc3QoaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8YW55W10+IHtcbiAgICByZXR1cm4gdGhpcy5xdWVyeShgL2FydGlzdHMvJHtpZH1gKTtcbiAgfVxuXG4gIGdldEFsYnVtKGlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueVtdPiB7XG4gICAgcmV0dXJuIHRoaXMucXVlcnkoYC9hbGJ1bXMvJHtpZH1gKTtcbiAgfVxufVxuXG5leHBvcnQgdmFyIFNQT1RJRllfUFJPVklERVJTOiBBcnJheTxhbnk+ID0gW1xuICBwcm92aWRlKFNwb3RpZnlTZXJ2aWNlLCB7dXNlQ2xhc3M6IFNwb3RpZnlTZXJ2aWNlfSlcbl07XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
