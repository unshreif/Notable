
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './Components/app.config';
import { AppComponent } from './Components/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './Components/app.routes';

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    ...(appConfig.providers || []),
    provideRouter(routes)
  ]
})
  .catch((err: unknown) => console.error(err));
