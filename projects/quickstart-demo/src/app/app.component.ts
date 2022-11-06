import { Component } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { filter } from 'rxjs/operators';
import { authCodeFlowConfig } from './auth.config';
import { JwksValidationHandler } from 'angular-oauth2-oidc-jwks';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Quickstart Demo';

  constructor(private oauthService: OAuthService) {
    this.oauthService.configure(authCodeFlowConfig);
    this.oauthService.loadDiscoveryDocumentAndLogin();

    this.oauthService.setupAutomaticSilentRefresh();

    // Automatically load user profile
    this.oauthService.events
      .pipe(filter((e) => e.type === 'token_received'))
      .subscribe((_) => this.oauthService.loadUserProfile());

    this.oauthService.loadDiscoveryDocumentAndTryLogin().then(console.log);
  }

  get userName(): string {
    const claims = this.oauthService.getIdentityClaims();
    if (!claims) return null;
    return claims['given_name'];
  }

  refresh() {
    this.oauthService.refreshToken();
  }
}
