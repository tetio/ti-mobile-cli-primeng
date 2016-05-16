System.register(['angular2/core', 'angular2/http', "../config/config", '../payload/service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, config_1, service_1;
    var SecurityService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (config_1_1) {
                config_1 = config_1_1;
            },
            function (service_1_1) {
                service_1 = service_1_1;
            }],
        execute: function() {
            SecurityService = (function (_super) {
                __extends(SecurityService, _super);
                function SecurityService(_http) {
                    _super.call(this, _http);
                    this._loginOKUrl = 'api/login/login-ok.json';
                    this._loginUrl = config_1.Config.getEnvironmentVariable('endPoint') + '/webTermint/api/login';
                    this.session = null;
                }
                SecurityService.prototype.login = function (payload) {
                    //        return this._http.post(this._loginUrl, JSON.stringify(payload))
                    return this._http.get(this._loginOKUrl)
                        .map(function (response) { return response.json(); })
                        .catch(this.handleError);
                };
                SecurityService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], SecurityService);
                return SecurityService;
            }(service_1.Service));
            exports_1("SecurityService", SecurityService);
        }
    }
});
//# sourceMappingURL=security.service.js.map