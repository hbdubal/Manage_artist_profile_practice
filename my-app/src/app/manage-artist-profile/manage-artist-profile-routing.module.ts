import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageArtistProfileComponent } from './manage-artist-profile.component';

const routes: Routes = [{ path: '', component: ManageArtistProfileComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageArtistProfileRoutingModule { }
