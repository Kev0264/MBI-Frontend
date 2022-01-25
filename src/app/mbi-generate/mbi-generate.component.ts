import { Component, OnInit } from '@angular/core';
import { Mbi } from '../mbi';
import { MbiService } from '../mbi.service';

@Component({
  selector: 'app-mbi-generate',
  templateUrl: './mbi-generate.component.html',
  styleUrls: ['./mbi-generate.component.css']
})
export class MbiGenerateComponent implements OnInit {

  newMbi: Mbi;

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

}
