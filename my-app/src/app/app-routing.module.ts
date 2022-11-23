import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'manage-artist-profile', loadChildren: () => import('./manage-artist-profile/manage-artist-profile.module').then(m => m.ManageArtistProfileModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
