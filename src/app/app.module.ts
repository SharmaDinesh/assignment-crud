import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { FilterPipe } from './filter.pipe'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssinmentcomponentComponent } from './assinmentcomponent/assinmentcomponent.component';
import { AssinmentcomponentService } from './assinmentcomponent/assinmentcomponent.service'

@NgModule({
  declarations: [
    AppComponent,
    AssinmentcomponentComponent,
    FilterPipe
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AssinmentcomponentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
