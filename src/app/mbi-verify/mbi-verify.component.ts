import { Component, OnInit } from '@angular/core';
import { Mbi } from '../mbi';
import { MbiService } from '../mbi.service';

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
