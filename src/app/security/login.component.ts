
import { Component } from '@angular/core';
import { Routes, Route, Router, ROUTER_DIRECTIVES } from '@angular/router';
import { InputText, Button, Menu } from 'primeng/primeng';
import { LorryService } from '../lorry/lorry.service';
import { TrainService } from '../train/train.service';
import { SecurityService } from './security.service';
import { LorryComponent } from '../lorry/lorry.component';
import { TrainComponent } from '../train/train.component';
import { Payload } from '../payload/payload';


@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html',
    directives: [ROUTER_DIRECTIVES, InputText, Button, Menu],
})

export class Login {
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


    constructor(private _securityService: SecurityService, private _router: Router) { }


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
        this._router.navigate(['/lorry']);
    }
    setTrainMode() {
        this.lorryMode = false;
        this.trainMode = true;
    }

    login() {
        let payload = new Payload<string>();
        payload['username'] = this.username;
        payload['password'] = this.password;
        //let securityService = this._securityService<
        this._securityService.login(payload)
            .subscribe(
            // TODO: Check with secutity service
            session => {
                if (session.codiError >= 0 && session.token) {
                    this.loggedIn = true;
                    this._securityService.session = session;
                    this._router.navigate(['/lorry']);
                } else {
                    // TODO avisar que no s'ha autenticat correctament
                    this._router.navigate(['/']);
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
