import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'car',
        loadChildren: () => import('./car/car.module').then(m => m.Omen3CarModule)
      },
      {
        path: 'document',
        loadChildren: () => import('./document/document.module').then(m => m.Omen3DocumentModule)
      },
      {
        path: 'content',
        loadChildren: () => import('./content/content.module').then(m => m.Omen3ContentModule)
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ]
})
export class Omen3EntityModule {}
