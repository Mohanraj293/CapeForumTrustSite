import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ResearchForumComponent } from './Forums/Research-Forum/research.component';
import { StudentsForumComponent } from './Forums/Students-Forum/students.component';
import { TeachersForumComponent } from './Forums/Teachers-Forum/teachers.component';
import { WomenForumComponent } from './Forums/Women-forum/women.component';
import { FarmersForumComponent } from './Forums/Farmers-Forum/farmers.component';
import { GovernanceComponent } from './Governance/governance.component';
import { MembershipCompoent } from './Memberships/memberships.component';
import { FounderComponent } from './about-founder/founder.component';
import { ContactComponent } from './contact-us/contact-us.component';
import { PublicationComponent } from './publications/publications.component';
import { ResearchAwardComponent } from './Awards/Research/research.component';
import { EntrepreneurAwardComponent } from './Awards/entrepreneur/entrepreneur.component';
import { OtherAwardComponent } from './Awards/other/other.component';
import { StudentsAwardComponent } from './Awards/students/students.component';
import { TeachersAwardComponent } from './Awards/teachers/teachers.component';
import { WomenAwardComponent } from './Awards/women/women.component';
import { GalleryComponent } from './Activities-galleries/gallery.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ResearchForumComponent,
    StudentsForumComponent,
    TeachersForumComponent,
    WomenForumComponent,
    FarmersForumComponent,
    GovernanceComponent,
    MembershipCompoent,
    FounderComponent,
    ContactComponent,
    PublicationComponent,
    ResearchAwardComponent,
    EntrepreneurAwardComponent,
    OtherAwardComponent,
    StudentsAwardComponent,
    TeachersAwardComponent,
    WomenAwardComponent,
    GalleryComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'founder',
        component: FounderComponent,
      },
      {
        path: 'governance',
        component: GovernanceComponent,
      },
      {
        path: 'research',
        component: ResearchForumComponent,
      },
      {
        path: 'students',
        component: StudentsForumComponent,
      },
      {
        path: 'teachers',
        component: TeachersForumComponent,
      },
      {
        path: 'women',
        component: WomenForumComponent,
      },
      {
        path: 'farmers',
        component: FarmersForumComponent,
      },
      {
        path: 'research-award',
        component: ResearchAwardComponent,
      },
      {
        path: 'students-award',
        component: StudentsAwardComponent,
      },
      {
        path: 'teachers-award',
        component: TeachersAwardComponent,
      },
      {
        path: 'women-award',
        component: WomenAwardComponent,
      },
      {
        path: 'other-award',
        component: OtherAwardComponent,
      },
      {
        path: 'entrepreneur-award',
        component: EntrepreneurAwardComponent,
      },
      {
        path: 'publications',
        component: PublicationComponent,
      },
      {
        path: 'memberships',
        component: MembershipCompoent,
      },
      {
        path: 'gallery',
        component: GalleryComponent,
      },
      {
        path: 'contactus',
        component: ContactComponent,
      },
      {
        path: '**',
        redirectTo: '',
        pathMatch: 'full',
      },
    ]),
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
