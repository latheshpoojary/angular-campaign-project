import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {Ng2OrderModule} from 'ng2-order-pipe'


import { HeaderComponent } from './header/header.component';
import { CampaignInputComponent } from './campaign-input/campaign-input.component';
import { CampaignDetailsComponent } from './campaign-details/campaign-details.component';
import { LocationDetailsComponent } from './location-details/location-details.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    HeaderComponent,
    CampaignInputComponent,
    CampaignDetailsComponent,
    LocationDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

