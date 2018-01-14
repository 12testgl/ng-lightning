import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NglModule } from 'ng-lightning/ng-lightning';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent }  from './demo';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, NglModule.forRoot() ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
})
export class AppModule { }
