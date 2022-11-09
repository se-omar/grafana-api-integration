import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FoldersAndDashboardsComponent } from './pages/folders-and-dashboards/folders-and-dashboards.component';
import { CreateDashboardComponent } from './create-dashboard/create-dashboard.component';
// import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';

import { MatExpansionModule } from '@angular/material/expansion';
import { OAuthModule, OAuthStorage } from 'angular-oauth2-oidc';
import { LoginSuccessComponent } from './pages/login-success/login-success.component';
import { AuthGuardService } from './services/auth-guard.service';
import { FoldersComponent } from './pages/folders/folders.component';
import { DashboardsComponent } from './pages/dashboards/dashboards.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FoldersAndDashboardsComponent,
    CreateDashboardComponent,
    LoginSuccessComponent,
    FoldersComponent,
    DashboardsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    MatButtonModule,
    OAuthModule.forRoot(),
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuardService],
      },

      {
        path: 'folders',
        component: FoldersComponent,
        canActivate: [AuthGuardService],
      },
      {
        path: 'dashboards/:folderId',
        component: DashboardsComponent,
        canActivate: [AuthGuardService],
      },
      {
        path: 'login-success',
        component: LoginSuccessComponent,
      },
    ]),
    BrowserAnimationsModule,
    MatExpansionModule,
  ],
  providers: [
    {
      provide: OAuthStorage,
      useValue: localStorage,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
