import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';



import { HeaderComponent } from './header/header.component';
import { CampaignInputComponent } from './campaign-input/campaign-input.component';
import { CampaignDetailsComponent } from './campaign-details/campaign-details.component';
import { LocationDetailsComponent } from './location-details/location-details.component';
import { SortListPipe } from './pipes/sort-list.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    HeaderComponent,
    CampaignInputComponent,
    CampaignDetailsComponent,
    LocationDetailsComponent,
    SortListPipe
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

