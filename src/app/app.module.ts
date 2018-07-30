import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { GeneratorsComponent } from './generators/generators.component';
import { ConvertersComponent } from './converters/converters.component';
import { HealthService } from './health.service';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { GeneratorService } from './generator.service';
import { CompressorService } from './compressor.service';
import { ReactiveFormsModule } from '@angular/forms';
import { UrlAliasComponent } from './compressors/url-alias/url-alias.component';
import { BlobAliasComponent } from './compressors/blob-alias/blob-alias.component';
import { QuickCardsComponent } from './quick-cards/quick-cards.component';
import { GenUuidFormComponent } from './generators/gen-uuid-form/gen-uuid-form.component';
import { GenMongodbFormComponent } from './generators/gen-mongodb-form/gen-mongodb-form.component';
import { GenRandomStringFormComponent } from './generators/gen-random-string-form/gen-random-string-form.component';
import { GenRandomNumberFormComponent } from './generators/gen-random-number-form/gen-random-number-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    GeneratorsComponent,
    ConvertersComponent,
    UrlAliasComponent,
    BlobAliasComponent,
    QuickCardsComponent,
    GenUuidFormComponent,
    GenMongodbFormComponent,
    GenRandomStringFormComponent,
    GenRandomNumberFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [HealthService, GeneratorService, CompressorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
