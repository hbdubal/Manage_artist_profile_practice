import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageArtistProfileRoutingModule } from './manage-artist-profile-routing.module';
import { ManageArtistProfileComponent } from './manage-artist-profile.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ManageArtistProfileService } from './manage-artist-profile.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ManageArtistProfileComponent
  ],
  imports: [
    CommonModule,
    ManageArtistProfileRoutingModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports:[
    ManageArtistProfileComponent
  ],
  providers:[
    ManageArtistProfileService
  ]
})
export class ManageArtistProfileModule { }
