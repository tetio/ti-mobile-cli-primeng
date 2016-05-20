import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import {ILorryMovement, LorryQueryResponse} from './lorryMovement';
import {LorryService} from './lorry.service';
import { SecurityService } from '../security/security.service';
import { Payload } from '../payload/payload';
import {Button, Dialog, Dropdown, Menu, MenuItem} from 'primeng/primeng';

// templateUrl: 'app/lorry/lorry.component.html',

@Component({
    moduleId: module.id,
    templateUrl: 'lorry.component.html',
    directives: [ROUTER_DIRECTIVES, Dropdown, Dialog, Button, Menu]
})
export class LorryComponent implements OnInit {
    lorryMovements: ILorryMovement[];
    notFoundMessage: boolean = false;
    errorMessage: string;
    errors: string[];
    confirmationMessage: string;
    selectedMovementType: string = '1';
    selectedMovement: ILorryMovement;
    equipId: string;
    displayConfirmation: boolean = false;

    private menuItems: MenuItem[];
    private values = [
        {
            value: '1',
            label: 'Entrada'
        },
        {
            value: '2',
            label: 'Salida'
        }
    ];

    constructor(private _lorryService: LorryService, private _securityService: SecurityService) { }

    ngOnInit() {

    }

    search() {
        this.lorryMovements = [];
        this.selectedMovement = null;
        let payload = new Payload<string>();
        payload['usuariSessio'] = this._securityService.session.usuari;
        payload['nifSessio'] =  this._securityService.session.nif;
        payload['paisSessio'] =  this._securityService.session.pais;
        payload['token'] =  this._securityService.session.token;
        payload['pagina'] = '1';
        payload['tipoSelect'] = this.selectedMovementType;
        if (this.equipId) {
            payload['contenedor'] = this.equipId;
        }
        this._lorryService.getLorryMovements(payload)
            .subscribe(
                lorryQueryResponse => this.movementsReceived(lorryQueryResponse),
                error => this.errorMessage = <any>error);
    }

    movementsReceived(response: LorryQueryResponse) {
        this.lorryMovements = response.lista;
        this.notFoundMessage = (response.lista.length === 0);

    }

    closeMovement(movement) {
        console.log(`Lorry movement to close = [${movement.idMov}]`);
    }

    onItemChange(currentItem) {
        this.selectedMovementType = currentItem;
        // currentItem sempres està un per devant al index de l'array de valors
        console.log(`selected = [${this.values[currentItem - 1].value}]`);
    }


    public literalCraneLorry(camionOGrua: number) {
        return (camionOGrua === 1) ? 'CAMIÓN' : 'GRÚA';
    }


    public selectMovement(movement: ILorryMovement) {
        this.selectedMovement = movement;
        this.confirmationMessage = `Desea confirmar el equipo ${this.selectedMovement.contenedor.toUpperCase()}?`;
        this.displayConfirmation = true;
    }

    public confirmMovement() {
        this.displayConfirmation = false;
        if (this.selectedMovement.camionOGrua === 1) {
           this.confirmLorry();
        } else {
            this.confirmCrane();
        }
    }


    public confirmCrane() {
        let payload = new Payload<string>();
        payload['usuariSessio'] = this._securityService.session.usuari;
        payload['nifSessio'] =  this._securityService.session.nif;
        payload['paisSessio'] =  this._securityService.session.pais;
        payload['token'] =  this._securityService.session.token;
        payload['idMov'] = this.selectedMovement.idMov.toString();
        this._lorryService.confirmCraneMovement(payload)
            .subscribe(
            errors => {
                    this.errors = errors;
                    if (errors.length === 0) {
                        this.search();
                }},
                error => this.errorMessage = <any>error
            );
    }

    public confirmLorry() {
        let payload = new Payload<string>();
        payload['usuariSessio'] = this._securityService.session.usuari;
        payload['nifSessio'] =  this._securityService.session.nif;
        payload['paisSessio'] =  this._securityService.session.pais;
        payload['token'] =  this._securityService.session.token;
        payload['idMov'] = this.selectedMovement.idMov.toString();
        this._lorryService.confirmLorryMovement(payload)
            .subscribe(
            errors => {
                    this.errors = errors;
                    if (errors.length === 0) {
                        this.search();
                }},
                error => this.errorMessage = <any>error
            );
    }
}
