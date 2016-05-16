System.register(['angular2/core', 'angular2/http', 'rxjs/Observable', "../config/config"], function(exports_1, context_1) {
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
    var core_1, http_1, Observable_1, config_1;
    var TrainService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (config_1_1) {
                config_1 = config_1_1;
            }],
        execute: function() {
            TrainService = (function () {
                function TrainService(_http) {
                    this._http = _http;
                    this._trainServicesUrl = config_1.Config.getEnvironmentVariable('endPoint') + '/webTermint/api/trainServicesQuery';
                    this._trainMovementsUrl = 'api/train/train-list.json';
                    this._trainMovementConfirmationsUrl = 'api/train/train-confirmation.json';
                    this._lorryMovementsUrl = config_1.Config.getEnvironmentVariable('endPoint') + '/webTermint/api/trainQuery';
                }
                TrainService.prototype.getTrainServices = function (payload) {
                    return this._http.post(this._trainServicesUrl, JSON.stringify(payload))
                        .map(function (response) { return response.json(); })
                        .catch(this.handleError);
                };
                TrainService.prototype.getTrains = function (payload) {
                    return this._http.post(this._trainMovementsUrl, JSON.stringify(payload))
                        .map(function (response) { return response.json(); })
                        .catch(this.handleError);
                };
                TrainService.prototype.handleError = function (error) {
                    console.error(error);
                    return Observable_1.Observable.throw(error.json().error || 'Server error');
                };
                TrainService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], TrainService);
                return TrainService;
            }());
            exports_1("TrainService", TrainService);
        }
    }
});
//# sourceMappingURL=train.service.js.map