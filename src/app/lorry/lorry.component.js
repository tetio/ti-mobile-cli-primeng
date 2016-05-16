System.register(['angular2/core', 'angular2/router', './lorry.service', '../security/security.service', '../payload/payload', 'primeng/primeng'], function(exports_1, context_1) {
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
    var core_1, router_1, lorry_service_1, security_service_1, payload_1, primeng_1;
    var LorryComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (lorry_service_1_1) {
                lorry_service_1 = lorry_service_1_1;
            },
            function (security_service_1_1) {
                security_service_1 = security_service_1_1;
            },
            function (payload_1_1) {
                payload_1 = payload_1_1;
            },
            function (primeng_1_1) {
                primeng_1 = primeng_1_1;
            }],
        execute: function() {
            LorryComponent = (function () {
                function LorryComponent(_lorryService, _securityService) {
                    this._lorryService = _lorryService;
                    this._securityService = _securityService;
                    this.notFoundMessage = false;
                    this.selectedMovementType = "1";
                    this.displayConfirmation = false;
                    this.values = [
                        {
                            value: "1",
                            label: "Entrada"
                        },
                        {
                            value: "2",
                            label: "Salida"
                        }
                    ];
                }
                LorryComponent.prototype.search = function () {
                    var _this = this;
                    this.lorryMovements = [];
                    this.selectedMovement = null;
                    var payload = new payload_1.Payload();
                    payload["usuariSessio"] = this._securityService.session.usuari;
                    payload["nifSessio"] = this._securityService.session.nif;
                    payload["paisSessio"] = this._securityService.session.pais;
                    payload["token"] = this._securityService.session.token;
                    payload["pagina"] = "1";
                    payload["tipoSelect"] = this.selectedMovementType;
                    if (this.equipId) {
                        payload["contenedor"] = this.equipId;
                    }
                    this._lorryService.getLorryMovements(payload)
                        .subscribe(function (lorryQueryResponse) { return _this.movementsReceived(lorryQueryResponse); }, function (error) { return _this.errorMessage = error; });
                };
                LorryComponent.prototype.movementsReceived = function (response) {
                    this.lorryMovements = response.lista;
                    this.notFoundMessage = (response.lista.length == 0);
                };
                LorryComponent.prototype.closeMovement = function (movement) {
                    console.log("Lorry movement to close = [" + movement.idMov + "]");
                };
                LorryComponent.prototype.onItemChange = function (currentItem) {
                    this.selectedMovementType = currentItem;
                    // currentItem sempres està un per devant al index de l'array de valors
                    console.log("selected = [" + this.values[currentItem - 1].value + "]");
                };
                LorryComponent.prototype.literalCraneLorry = function (camionOGrua) {
                    return (camionOGrua == 1) ? "CAMIÓN" : "GRÚA";
                };
                LorryComponent.prototype.selectMovement = function (movement) {
                    this.selectedMovement = movement;
                    this.confirmationMessage = "Desea confirmar el equipo " + this.selectedMovement.contenedor.toUpperCase() + "?";
                    this.displayConfirmation = true;
                };
                LorryComponent.prototype.confirmMovement = function () {
                    this.displayConfirmation = false;
                    if (this.selectedMovement.camionOGrua == 1) {
                        this.confirmLorry();
                    }
                    else {
                        this.confirmCrane();
                    }
                };
                LorryComponent.prototype.confirmCrane = function () {
                    var _this = this;
                    var payload = new payload_1.Payload();
                    payload["usuariSessio"] = this._securityService.session.usuari;
                    payload["nifSessio"] = this._securityService.session.nif;
                    payload["paisSessio"] = this._securityService.session.pais;
                    payload["token"] = this._securityService.session.token;
                    payload["idMov"] = this.selectedMovement.idMov.toString();
                    this._lorryService.confirmCraneMovement(payload)
                        .subscribe(function (errors) {
                        _this.errors = errors;
                        if (errors.length == 0) {
                            _this.search();
                        }
                    }, function (error) { return _this.errorMessage = error; });
                };
                LorryComponent.prototype.confirmLorry = function () {
                    var _this = this;
                    var payload = new payload_1.Payload();
                    payload["usuariSessio"] = this._securityService.session.usuari;
                    payload["nifSessio"] = this._securityService.session.nif;
                    payload["paisSessio"] = this._securityService.session.pais;
                    payload["token"] = this._securityService.session.token;
                    payload["idMov"] = this.selectedMovement.idMov.toString();
                    this._lorryService.confirmLorryMovement(payload)
                        .subscribe(function (errors) {
                        _this.errors = errors;
                        if (errors.length == 0) {
                            _this.search();
                        }
                    }, function (error) { return _this.errorMessage = error; });
                };
                LorryComponent = __decorate([
                    core_1.Component({
                        selector: 'lorry-tab',
                        templateUrl: 'app/lorry/lorry.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES, primeng_1.Dropdown, primeng_1.Dialog, primeng_1.Button]
                    }), 
                    __metadata('design:paramtypes', [lorry_service_1.LorryService, security_service_1.SecurityService])
                ], LorryComponent);
                return LorryComponent;
            }());
            exports_1("LorryComponent", LorryComponent);
        }
    }
});
//# sourceMappingURL=lorry.component.js.map