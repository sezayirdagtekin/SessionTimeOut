import {HttpModule} from '@angular/http';
import {HttpClientModule } from '@angular/common/http';
import {NgIdleKeepaliveModule} from '@ng-idle/keepalive';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ProgressBarModalComponent} from './progressbar-modal.component';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
	 AppComponent,
    ProgressBarModalComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    NgIdleKeepaliveModule.forRoot(),
    HttpModule,
	HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ProgressBarModalComponent]
})
export class AppModule { }
