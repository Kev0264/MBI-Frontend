import { Component, OnInit } from '@angular/core';
import { Mbi } from '../mbi';
import { MbiService } from '../mbi.service';

enum VerifiedType {
  Unverified = -1,
  VerificationFailed = 0,
  VerificationSuccessful = 1
}

@Component({
  selector: 'app-mbis',
  templateUrl: './mbis.component.html',
  styleUrls: ['./mbis.component.css']
})
export class MbisComponent implements OnInit {

  newMbi: Mbi;
  mbiToVerify = '';
  VerifiedEnum = VerifiedType;
  mbiVerified = VerifiedType.Unverified;

  constructor(private mbiService: MbiService) {
    this.newMbi = {
      value: ""
    };
  }

  ngOnInit(): void {
  }

  generateMbi(): void {
    this.mbiService.generateMbi()
      .subscribe(mbi => this.newMbi = mbi);
  }

  verifyMbi(): void {
    this.mbiVerified = VerifiedType.Unverified;

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
