import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageArtistProfileRoutingModule } from './manage-artist-profile-routing.module';
import { ManageArtistProfileComponent } from './manage-artist-profile.component';


@NgModule({
  declarations: [
    ManageArtistProfileComponent
  ],
  imports: [
    CommonModule,
    ManageArtistProfileRoutingModule
  ]
})
export class ManageArtistProfileModule { }
