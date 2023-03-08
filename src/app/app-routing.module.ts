import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { LightboxComponent } from './components/lightbox/lightbox.component';
import { ResearchComponent } from './components/research/research.component';
import { PublicationComponent } from './components/publication/publication.component'
const routes: Routes = [
  { path: "about", component: AboutComponent },
  { path: "research", component: ResearchComponent },
  { path: "lightbox", component: LightboxComponent },
  { path: "contact", component: ContactComponent },
  { path: "publication", component: PublicationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
