import { APP_INITIALIZER, NgModule } from '@angular/core';
import { DIRECTIVES } from './stencil-generated';
import { defineCustomElements } from 'stencil-library/loader';
//import { defineCustomElements } from '../../../../../stencil-library/loader';
import { EvilPhonenumberComponent } from './evil-phonenumber/evil-phonenumber.component';

@NgModule({
  declarations: [...DIRECTIVES, EvilPhonenumberComponent],
  imports: [],
  exports: [...DIRECTIVES, EvilPhonenumberComponent],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: () => {
        return defineCustomElements();
      },
    },
  ],
})
export class ComponentLibraryModule {}
