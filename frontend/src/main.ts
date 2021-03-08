import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { API_URL } from './app/app.constants';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic([{ provide: API_URL, useValue: environment.apiUrl }])
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
