import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import { Config } from '../config/config';
import { Payload } from '../payload/payload';
import { Service } from '../payload/service';
import { ISession } from './session';

@Injectable()
export class SecurityService extends Service {
    private _loginOKUrl = 'api/login/login-ok.json';
    private _loginUrl = Config.getEnvironmentVariable('endPoint') + '/webTermint/api/login';
    session: ISession = null;


    constructor(_http: Http) {
        super(_http);
    }

    login(payload): Observable<ISession> {
        return this._http.post(this._loginUrl, JSON.stringify(payload))
            // return this._http.get(this._loginOKUrl)
            .map((response: Response) => <ISession>response.json())
            .catch(this.handleError);
    }
}
