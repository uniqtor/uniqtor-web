import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneratorsComponent } from './generators/generators.component';
import { HomeComponent } from './home/home.component';
import { ConvertersComponent } from './converters/converters.component';
import { UrlAliasComponent } from './compressors/url-alias/url-alias.component';
import { BlobAliasComponent } from './compressors/blob-alias/blob-alias.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "generators",
    component: GeneratorsComponent
  }
  ,
  {
    path: "converters",
    component: ConvertersComponent
  },
  {
    path: "ua",
    component: UrlAliasComponent
  },
  {
    path: "ba",
    component: BlobAliasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
