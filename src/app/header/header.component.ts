import { Component, OnInit } from '@angular/core';
import { HealthService } from '../health.service';
import { GeneratorService } from '../generator.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  status;
  isUp = false;

  constructor(private healthService: HealthService) { }

  ngOnInit() {
    this.checkHealth();
  }
  checkHealth() {
    this.healthService.checkHealth().subscribe(
      data => {
        this.status = data,
        this.isUp = this.status.status == 'UP'
      },
      err => {console.log(err)},
      () => console.log('health checked')
    );
  }
}
