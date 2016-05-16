import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import 'rxjs/Rx';   // Load all features
// import { ROUTER_PROVIDERS, RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { ROUTER_PROVIDERS, Routes, Route, ROUTER_DIRECTIVES } from '@angular/router';
import {InputText, Button, Menu } from 'primeng/primeng';

import { LorryService } from './lorry/lorry.service';
import { TrainService } from './train/train.service';
import { SecurityService } from './security/security.service';
import { LorryComponent } from './lorry/lorry.component';
import { TrainComponent } from './train/train.component';
import { Payload } from './payload/payload';



@Component({
    selector: 'angular-cli-primeng-app',
    templateUrl: 'app/angular-cli-primeng.component.html',
    directives: [ROUTER_DIRECTIVES, InputText, Button, Menu],
    providers: [LorryService, TrainService, SecurityService, HTTP_PROVIDERS, ROUTER_PROVIDERS]
})
// @RouteConfig([
//     { path: '/lorry', name: 'Lorry', component: LorryComponent, useAsDefault: true },
//     { path: '/train', name: 'Train', component: TrainComponent }
// ])
@Routes([
    new Route({ path: '/', component: AngularCliPrimengAppComponent }),
    new Route({ path: '/lorry', component: LorryComponent }),
    new Route({ path: '/train', component: TrainComponent })
])
export class AngularCliPrimengAppComponent {
    pageTitle: string = 'Gestión de entradas y salidas';
    public menuItems = [
        { caption: 'TREN', link: ['Train'] },
        { caption: 'CAMIÓN', link: ['Lorry'] }
    ];
    lorryMode: boolean = true;
    trainMode: boolean = false;
    loggedIn: boolean = false;
    username: string = 'NESTA';
    password: string = 'CALL';
    errorMessage: string;


    constructor(private _securityService: SecurityService) { }

    isLoggedIn(): boolean {
        return this.loggedIn;
    }
    isLorryMode() {
        return this.lorryMode;
    }
    isTrainMode() {
        return this.trainMode;
    }

    setLorryMode() {
        this.lorryMode = true;
        this.trainMode = false;
    }
    setTrainMode() {
        this.lorryMode = false;
        this.trainMode = true;
    }

    login() {
        let payload = new Payload<string>();
        payload['username'] = this.username;
        payload['password'] = this.password;
        this._securityService.login(payload)
            .subscribe(
            // TODO: Check with secutity service
            session => {
                if (session.codiError >= 0 && session.token) {
                    this.loggedIn = true;
                    this._securityService.session = session;
                } else {
                    // TODO avisar que no s'ha autenticat correctament
                }
            },
            error => this.errorMessage = error
            );
    }
}





// import { Component } from '@angular/core';
// import {InputText} from 'primeng/primeng'

// @Component({
//   moduleId: module.id,
//   selector: 'angular-cli-primeng-app',
//   templateUrl: 'angular-cli-primeng.component.html',
//   styleUrls: ['angular-cli-primeng.component.css'],
//   directives: [InputText]
// })
// export class AngularCliPrimengAppComponent {
//   title = 'angular-cli-primeng works!';
// }
