import { Component, OnInit } from '@angular/core';
import { GeneratorService } from '../../generator.service';
import { FormGroup, FormControl } from '../../../../node_modules/@angular/forms';

@Component({
  selector: 'app-gen-uuid-form',
  templateUrl: './gen-uuid-form.component.html',
  styleUrls: ['./gen-uuid-form.component.css']
})
export class GenUuidFormComponent implements OnInit {

  uuidForm: FormGroup;
  nUuids;
  ids;
  constructor(private generatorService: GeneratorService) { }

  ngOnInit() {
    this.uuidForm = new FormGroup({
      n: new FormControl()
    });
  }

  getNUuids() {
    this.generatorService.getNUuids(this.uuidForm.value.n).subscribe(
      data => {this.nUuids = data,
      this.ids = this.nUuids.ids},
      error => console.error(error)
    );
  }
}
