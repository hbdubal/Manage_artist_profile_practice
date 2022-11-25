import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ManageArtistProfileService } from './manage-artist-profile.service';

@Component({
  selector: 'app-manage-artist-profile',
  templateUrl: './manage-artist-profile.component.html',
  styleUrls: ['./manage-artist-profile.component.scss']
})
export class ManageArtistProfileComponent implements OnInit {
  selectedArtistType:any;
  artistProfileForm!:FormGroup;
  public isSubmitted: boolean = false;
  public weekdays1: any = [];
  public weekdays2: any = [];
  public weekdays1Id: any;
  public weekdays2Id: any;

  /**
   * ArtistType List
   */
  artistType = [
    {id: 1, name: 'singer'},
    {id: 2, name: 'dj'},
    {id: 3, name: 'Instrument player'},
];
  constructor(private fb:FormBuilder, public manageartistprofileservice:ManageArtistProfileService,public http: HttpClient) {
    this.artistProfileForm=this.fb.group(
      {
        artistName:['',[Validators.required, Validators.maxLength(30), Validators.pattern('^[A-Za-z0-9 _@$!&]*$')]],
        artistType:['',[Validators.required]],
        artistDescription:['',[Validators.required, Validators.maxLength(250)]],
        performanceType:['',[Validators.required]],
        weekdays1:['',[Validators.required]],
        weekdays2:['',[Validators.required]],
        eventRate:['',[Validators.required,Validators.pattern("^[0-9]*$")]]
      }
    )
   }

   /**
    * Submit Details
    */
   submitDetails()
   {
    this.isSubmitted = true;
    console.log(this.artistProfileForm);
   }

   
   /**
   * Validation FormControl
   */
  get validator(): { [key: string]: AbstractControl<any> } {
    return this.artistProfileForm.controls;
  }

  ngOnInit(): void {
    this.getalldays1();
    this.getalldays2();
  }

  /**
   * Get Days to Days Data
   */
   getalldays1() {
    this.manageartistprofileservice.getallWeekdays1().subscribe((data) => {
      this.weekdays1 = data;
    })
  }
  getalldays2() {
    this.manageartistprofileservice.getallWeekdays2().subscribe((data) => {
      this.weekdays2 = data;
    })
  }
  onweekDays1(weekday1Id: number) {
    this.weekdays1Id = weekday1Id;
  }

}
