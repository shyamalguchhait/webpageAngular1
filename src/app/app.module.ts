import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ResearchComponent } from './components/research/research.component';
import { LightboxComponent } from './components/lightbox/lightbox.component';
import { ContactComponent } from './components/contact/contact.component';
import { LightboxModule } from 'ngx-lightbox';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { FormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { PublicationComponent } from './components/publication/publication.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ResearchComponent,
    LightboxComponent,
    ContactComponent,
    PublicationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LightboxModule,
    LazyLoadImageModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule { }
