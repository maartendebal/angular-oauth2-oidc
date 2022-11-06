import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {
  OAuthModule,
  OAuthSecureStorage,
  OAuthStorage,
} from 'angular-oauth2-oidc';
import { HttpClientModule } from '@angular/common/http';
import { SecureStorage } from './secure-storage';

@NgModule({
  imports: [BrowserModule, OAuthModule.forRoot(), HttpClientModule],
  declarations: [AppComponent],
  providers: [
    { provide: OAuthStorage, useValue: localStorage },
    { provide: OAuthSecureStorage, useClass: SecureStorage },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
