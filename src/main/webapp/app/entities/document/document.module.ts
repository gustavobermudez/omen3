import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Omen3SharedModule } from 'app/shared/shared.module';
import { DocumentComponent } from './document.component';
import { DocumentDetailComponent } from './document-detail.component';
import { DocumentUpdateComponent } from './document-update.component';
import { DocumentDeleteDialogComponent } from './document-delete-dialog.component';
import { documentRoute } from './document.route';

@NgModule({
  imports: [Omen3SharedModule, RouterModule.forChild(documentRoute)],
  declarations: [DocumentComponent, DocumentDetailComponent, DocumentUpdateComponent, DocumentDeleteDialogComponent],
  entryComponents: [DocumentDeleteDialogComponent]
})
export class Omen3DocumentModule {}
