import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FoldersAndDashboardsComponent } from './folders-and-dashboards/folders-and-dashboards.component';
import { CreateDashboardComponent } from './create-dashboard/create-dashboard.component';
// import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';

import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FoldersAndDashboardsComponent,
    CreateDashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    MatButtonModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'create-dashboard', component: CreateDashboardComponent },
      {
        path: 'folders-and-dashboards',
        component: FoldersAndDashboardsComponent,
      },
    ]),
    BrowserAnimationsModule,
    MatExpansionModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
