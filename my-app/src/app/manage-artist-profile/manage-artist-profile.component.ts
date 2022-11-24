import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-manage-artist-profile',
  templateUrl: './manage-artist-profile.component.html',
  styleUrls: ['./manage-artist-profile.component.scss']
})
export class ManageArtistProfileComponent implements OnInit {
  selectedArtistType:any;
  artistProfileForm!:FormGroup;
  artistType = [
    {id: 1, name: 'singer'},
    {id: 2, name: 'dj'},
    {id: 3, name: 'Instrument player'},
];
  constructor(private fb:FormBuilder) {
    this.artistProfileForm=this.fb.group(
      {
        artistName:['',[Validators.required]],
        artistType:['',[Validators.required]],
        artistDescription:['',[Validators.required]],
        performanceType:['',[Validators.required]],
        weekdays1:['',[Validators.required]],
        weekdays2:['',[Validators.required]],
      }
    )
   }

  ngOnInit(): void {
  }

}
