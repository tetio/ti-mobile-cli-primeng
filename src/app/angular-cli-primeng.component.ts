import { Component, OnInit } from '@angular/core';
import { Routes, Route, Router, ROUTER_DIRECTIVES } from '@angular/router';
import { InputText, Button, Menu } from 'primeng/primeng';
import { LorryService } from './lorry/lorry.service';
import { TrainService } from './train/train.service';
import { SecurityService } from './security/security.service';
import { Login } from './security/login.component';
import { LorryComponent } from './lorry/lorry.component';
import { TrainComponent } from './train/train.component';
import { Payload } from './payload/payload';



@Component({
    moduleId: module.id,
    selector: 'angular-cli-primeng-app',
    templateUrl: 'angular-cli-primeng.component.html',
    directives: [ROUTER_DIRECTIVES, InputText, Button, Menu],
    providers: [LorryService, TrainService, SecurityService]
})
@Routes([
    new Route({ path: '/', component: Login }),
    new Route({ path: '/train', component: TrainComponent }),
    new Route({ path: '/lorry', component: LorryComponent })
])
export class AngularCliPrimengAppComponent implements OnInit {

    constructor(private _router: Router) { }

    ngOnInit() {
        this._router.navigate(['/']);
    }


}




