import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';



import { HeaderComponent } from './campaign/header/header.component';
import { CampaignInputComponent } from './campaign/campaign-input/campaign-input.component';
import { CampaignDetailsComponent } from './campaign/campaign-details/campaign-details.component';
import { LocationDetailsComponent } from './campaign/location-details/location-details.component';
import { SortListPipe } from './pipes/sort-list.pipe';
import { UserDetailsComponent } from './campaign/user-details/user-details.component';
import { AudienceComponent } from './campaign/audience/audience.component';
import { SummaryComponent } from './campaign/summary/summary.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    HeaderComponent,
    CampaignInputComponent,
    CampaignDetailsComponent,
    LocationDetailsComponent,
    SortListPipe,
    UserDetailsComponent,
    AudienceComponent,
    SummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

