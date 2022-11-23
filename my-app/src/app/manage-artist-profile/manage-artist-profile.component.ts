import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-artist-profile',
  templateUrl: './manage-artist-profile.component.html',
  styleUrls: ['./manage-artist-profile.component.scss']
})
export class ManageArtistProfileComponent implements OnInit {
  selectedArtistType:any;
  ArtistType = [
    {id: 1, name: 'singer'},
    {id: 2, name: 'dj'},
    {id: 3, name: 'Instrument player'},
];
  constructor() { }

  ngOnInit(): void {
  }

}
