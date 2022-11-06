import { AuthConfig } from 'angular-oauth2-oidc';

export const authCodeFlowConfig: AuthConfig = {
  issuer: 'https://idpdev.booku.be',
  clientId: 'booku_angular_localhost',
  scope: 'openid profile offline_access',
  responseType: 'code',
  oidc: true,
  timeoutFactor: 0.9,
  redirectUri: 'http://localhost:4200/authenticate/signin-oidc',
  showDebugInformation: true,
  dummyClientSecret: '49C1A7E1-0C79-4A89-A3D6-A37998FB86B0',
};
