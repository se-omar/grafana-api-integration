import { Injectable } from '@angular/core';
import { JwksValidationHandler, OAuthService } from 'angular-oauth2-oidc';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private oauthService: OAuthService) {
    this.configureIAM();
  }

  configureIAM() {
    this.oauthService.configure({
      issuer: environment.IAMUrl,
      redirectUri: 'http://localhost:4200/login-success',
      clientId: environment.clientId,
      silentRefreshRedirectUri: 'http://localhost:4200/login-success',
      useSilentRefresh: true,
      logoutUrl: window.location.origin + '/login',
      responseType: 'code',
      requireHttps: false,
      showDebugInformation: true,
      scope: 'openid IdentityServerApi offline_access',
      silentRefreshTimeout: 5000,
    });
    this.oauthService.setStorage(sessionStorage);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
    //this.oauthService.setupAutomaticSilentRefresh();
    //this.oauthService.setupAutomaticSilentRefresh();
    //this.setupAutomaticLogoutInCaseOfTokenExpiry();
  }

  login() {
    this.oauthService.initLoginFlow();
  }

  logout() {
    this.oauthService.logOut();
  }

  get token() {
    let claims = this.oauthService.getIdentityClaims();
    return claims ? claims : null;
  }

  hasValidAccessToken() {
    return this.oauthService.hasValidAccessToken();
  }

  userName() {
    let t: any = JSON.parse(JSON.stringify(this.token));
    return t.DisplayName;
  }

  userId() {
    let t: any = JSON.parse(JSON.stringify(this.token));
    return t.Id;
  }

  getAccessToken() {
    this.oauthService.getAccessToken();
  }

  setupAutomaticLogoutInCaseOfTokenExpiry() {
    if (!this.oauthService.events) {
      return;
    }

    this.oauthService.events.subscribe((x: any) => {
      if (x.type === 'token_refresh_error') {
        // In case of internet connectivity
        if (
          x.reason &&
          x.reason.error &&
          x.reason.error.error === 'invalid_grant' &&
          x.reason.error.error_reason === 'refresh_token_not_found'
        ) {
          this.oauthService.logOut(true);
          (window as any).removeAllListeners();
          //this.router.navigateByUrl(`/${Constants.PageUrls.Login}`);
        } else {
          // In case of no internet connectivity
          this.oauthService.stopAutomaticRefresh();
          const rereshTimeout = setTimeout(() => {
            this.oauthService
              .refreshToken()
              .then(() => {
                this.oauthService.setupAutomaticSilentRefresh();
                clearTimeout(rereshTimeout);
              })
              .catch(() => {
                clearTimeout(rereshTimeout);
              });
          }, 5000);
        }
      }
    });
  }
}
