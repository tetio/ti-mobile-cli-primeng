import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { AngularCliPrimengAppComponent } from '../app/angular-cli-primeng.component';

beforeEachProviders(() => [AngularCliPrimengAppComponent]);

describe('App: AngularCliPrimeng', () => {
  it('should create the app',
    inject([AngularCliPrimengAppComponent], (app: AngularCliPrimengAppComponent) => {
      expect(app).toBeTruthy();
    }));

  it('should have default mode as lorry, so lorryMode must be \'true\'',
    inject([AngularCliPrimengAppComponent], (app: AngularCliPrimengAppComponent) => {
      expect(app.lorryMode).toEqual(true);
    }));
});
