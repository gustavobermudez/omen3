import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { Omen3SharedModule } from 'app/shared/shared.module';
import { Omen3CoreModule } from 'app/core/core.module';
import { Omen3AppRoutingModule } from './app-routing.module';
import { Omen3HomeModule } from './home/home.module';
import { Omen3EntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    Omen3SharedModule,
    Omen3CoreModule,
    Omen3HomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    Omen3EntityModule,
    Omen3AppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent]
})
export class Omen3AppModule {}
