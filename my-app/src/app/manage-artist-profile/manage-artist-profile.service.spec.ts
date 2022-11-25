import { TestBed } from '@angular/core/testing';

import { ManageArtistProfileService } from './manage-artist-profile.service';

describe('ManageArtistProfileService', () => {
  let service: ManageArtistProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageArtistProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
