import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AngularCliPrimengAppComponent, environment } from './app/';
import { HTTP_PROVIDERS } from '@angular/http';
import { ROUTER_PROVIDERS } from '@angular/router';
import 'rxjs/Rx';

if (environment.production) {
  enableProdMode();
}

bootstrap(AngularCliPrimengAppComponent, [ROUTER_PROVIDERS, HTTP_PROVIDERS]);
