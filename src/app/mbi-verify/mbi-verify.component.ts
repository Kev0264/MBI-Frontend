import { Component, OnInit } from '@angular/core';
import { Mbi } from '../mbi';
import { MbiService } from '../mbi.service';

// I'm using an enum so that I can change the display on the front end based on this value
enum VerifiedType {
  Unverified = -1,
  VerificationFailed = 0,
  VerificationSuccessful = 1
}

@Component({
  selector: 'app-mbi-verify',
  templateUrl: './mbi-verify.component.html',
  styleUrls: ['./mbi-verify.component.css']
})
export class MbiVerifyComponent implements OnInit {

  mbiToVerify = '';
  VerifiedEnum = VerifiedType;
  mbiVerified = VerifiedType.Unverified;

  constructor(private mbiService: MbiService) { }

  ngOnInit(): void {
  }

  verifyMbi(): void {
    this.mbiVerified = VerifiedType.Unverified;

    // Subscribe to the MBI Service which will call the /verify API endpoint
    this.mbiService.verifyMbi(this.mbiToVerify)
    .subscribe(result => {
      if (result) {
        this.mbiVerified = VerifiedType.VerificationSuccessful
      } else {
        this.mbiVerified = VerifiedType.VerificationFailed
      }
    });
  }
}
