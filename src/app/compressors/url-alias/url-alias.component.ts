import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '../../../../node_modules/@angular/forms';
import { Observable } from '../../../../node_modules/rxjs';
import { CompressorService } from '../../compressor.service';

@Component({
  selector: 'app-url-alias',
  templateUrl: './url-alias.component.html',
  styleUrls: ['./url-alias.component.css']
})
export class UrlAliasComponent implements OnInit {

  tinyUrlForm: FormGroup;
  tinyUrlDetailsForm: FormGroup;
  message: string = "";
  tinyUrl;
  tinyUrlDetails;
  tinyUrlId = '';
  extractedUrl = '';
  allowedHits;
  hits;

  getTinyUrlSuccess = false;
  getTinyUrlFail = false;

  constructor(private compressorService: CompressorService) { }

  ngOnInit() {
    this.tinyUrlForm = new FormGroup({
      url: new FormControl('', Validators.required),
      allowedHits: new FormControl('')
    });

    this.tinyUrlDetailsForm = new FormGroup({
      id: new FormControl('', Validators.required)
    });
  }

  generateTinyUrl() {
    if(this.tinyUrlForm.valid) {
      this.compressorService.generateTinyUrl(this.tinyUrlForm.value).subscribe(
        data => {
          this.tinyUrl = data;
          this.tinyUrlId = this.tinyUrl.id
        },
        error => console.log(error)
      )
    } else {
      this.message = "Please fill out the form before submitting!";
    }
    this.message = "Success!";
  }

  getTinyUrl() {
    this.tinyUrlDetails = null
    if(this.tinyUrlDetailsForm.valid) {
      this.compressorService.getUrlDetails(this.tinyUrlDetailsForm.value.id).subscribe(
        data => {
          this.tinyUrlDetails = data;
          this.getTinyUrlSuccess = true;
          this.getTinyUrlFail = false;
          this.extractedUrl = this.tinyUrlDetails.url;
          this.tinyUrlId = this.tinyUrlDetails.id;
          this.hits = this.tinyUrlDetails.hits;
          this.allowedHits = this.tinyUrlDetails.allowedHits;
        },
        error => {
          console.warn("No url exists with id: " + this.tinyUrlDetailsForm.value.id);
          this.getTinyUrlFail = true;
          this.getTinyUrlSuccess = false;
          this.tinyUrlId = this.tinyUrlDetailsForm.value.id;
        }
      );
    } else {
      this.message = "Please fill out the form before submitting!";
    }
  } 
}
