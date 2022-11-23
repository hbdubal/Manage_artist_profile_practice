import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManageArtistProfileModule } from './manage-artist-profile/manage-artist-profile.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ManageArtistProfileModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
