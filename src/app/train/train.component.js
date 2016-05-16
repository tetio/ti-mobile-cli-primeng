System.register(['angular2/core', 'angular2/router', './train.service', '../security/security.service', '../payload/payload'], function(exports_1, context_1) {
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
    var core_1, router_1, train_service_1, security_service_1, payload_1;
    var TrainComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (train_service_1_1) {
                train_service_1 = train_service_1_1;
            },
            function (security_service_1_1) {
                security_service_1 = security_service_1_1;
            },
            function (payload_1_1) {
                payload_1 = payload_1_1;
            }],
        execute: function() {
            TrainComponent = (function () {
                function TrainComponent(_trainService, _securityService) {
                    this._trainService = _trainService;
                    this._securityService = _securityService;
                    this.selectedOperacion = "0";
                    this.operaciones = [
                        {
                            value: "0",
                            label: "Todos"
                        },
                        {
                            value: "1",
                            label: "Carga"
                        },
                        {
                            value: "2",
                            label: "Descarga"
                        }
                    ];
                }
                TrainComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var payload = new payload_1.Payload();
                    payload["usuariSessio"] = this._securityService.session.usuari;
                    payload["nifSessio"] = this._securityService.session.nif;
                    payload["paisSessio"] = this._securityService.session.pais;
                    payload["token"] = this._securityService.session.token;
                    payload["pagina"] = "1";
                    payload["operacion"] = this.selectedOperacion;
                    if (this.fechaOficialSalida) {
                        payload["fechaOficialSalida"] = this.fechaOficialSalida;
                    }
                    this._trainService.getTrainServices(payload)
                        .subscribe(function (trainServicesResponse) {
                        // Check de seguretat
                        _this.trainServices = trainServicesResponse.lista;
                    }, function (error) { return _this.errorMessage = error; });
                };
                TrainComponent.prototype.search = function () {
                    var _this = this;
                    var payload = new payload_1.Payload();
                    payload["usuariSessio"] = this._securityService.session.usuari;
                    payload["nifSessio"] = this._securityService.session.nif;
                    payload["paisSessio"] = this._securityService.session.pais;
                    payload["token"] = this._securityService.session.token;
                    payload["pagina"] = "1";
                    payload["operacion"] = this.selectedOperacion;
                    if (this.fechaOficialSalida) {
                        payload["fechaOficialSalida"] = this.fechaOficialSalida;
                    }
                    this._trainService.getTrains(payload)
                        .subscribe(function (trains) { return _this.trains = trains; }, function (error) { return _this.errorMessage = error; });
                };
                TrainComponent = __decorate([
                    core_1.Component({
                        selector: 'train-tab',
                        templateUrl: 'app/train/train.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [train_service_1.TrainService, security_service_1.SecurityService])
                ], TrainComponent);
                return TrainComponent;
            }());
            exports_1("TrainComponent", TrainComponent);
        }
    }
});
//# sourceMappingURL=train.component.js.map