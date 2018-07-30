import { Component, OnInit } from '@angular/core';
import { GeneratorService } from '../../generator.service';
import { FormGroup, FormControl } from '../../../../node_modules/@angular/forms';

@Component({
  selector: 'app-gen-mongodb-form',
  templateUrl: './gen-mongodb-form.component.html',
  styleUrls: ['./gen-mongodb-form.component.css']
})
export class GenMongodbFormComponent implements OnInit {

  constructor(private generatorService: GeneratorService) { }

  generateMongoDbIdsForm: FormGroup;
  mongodbIds;

  ngOnInit() {
    this.generateMongoDbIdsForm = new FormGroup({
      n: new FormControl()
    });
  }

  getMongoDbIds() {
    this.generatorService.getNMongoDbIds(this.generateMongoDbIdsForm.value.n).subscribe(
      data => {this.mongodbIds = data},
      error => console.error(error)
    );
  }
}
