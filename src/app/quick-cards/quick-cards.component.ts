import { Component, OnInit } from '@angular/core';
import { v4 as uuid } from 'uuid'
import { GeneratorService } from '../generator.service';

@Component({
  selector: 'app-quick-cards',
  templateUrl: './quick-cards.component.html',
  styleUrls: ['./quick-cards.component.css']
})
export class QuickCardsComponent implements OnInit {

  public uuid4 = uuid();
  public uuid3 = uuid('uuid/v3');
  public now = new Date().getTime();
  public nowDateTime: string = new Date().toDateString() + ' ' + new Date().toTimeString();

  constructor(private generatorService: GeneratorService) { 
    setInterval(() => {
      this.now = new Date().getTime();
    }, 1000);
    setInterval(() => {
      this.uuid4 = uuid();
    }, 5000);
    setInterval(() => {
      this.uuid3 = uuid('uuid/v3');
    }, 5000);
    setInterval(() => {
      this.nowDateTime = new Date().toDateString() + ' ' + new Date().toTimeString();
    }, 1000)
  }

  ngOnInit() {
  }

  getSingleUuid() {
    this.generatorService.getSingleUuid().subscribe(
      data => {this.uuid4 = data},
      err => console.log(err),
      () => console.log('generated single uuid')
    );
  }

  getNgUuid() {
    this.uuid4 = uuid();
    this.uuid3 = uuid('uuid/v3');
  }

  copyUuid(uuid) {
    document.execCommand('copy');
  }
}
