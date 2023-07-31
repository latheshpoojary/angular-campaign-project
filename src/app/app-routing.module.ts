import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampaignInputComponent } from './campaign/campaign-input/campaign-input.component';
import { LocationDetailsComponent } from './campaign/location-details/location-details.component';
import { CampaignDetailsComponent } from './campaign/campaign-details/campaign-details.component';
import { UserDetailsComponent } from './campaign/user-details/user-details.component';
import { AudienceComponent } from './campaign/audience/audience.component';
import { SummaryComponent } from './campaign/summary/summary.component';
import { HeaderComponent } from './campaign/header/header.component';

const routes: Routes = [
  
  {path:'campaign',component:HeaderComponent},
  {path:'campaign-input',component:CampaignInputComponent,children:[
    {path:'',redirectTo:'campaign-details',pathMatch:'full'},
    {path:'campaign-details',component:CampaignDetailsComponent},
    {path:'location',component:LocationDetailsComponent},
    {path:'audience',component:AudienceComponent},
    {path:'summary',component:SummaryComponent}
  ]},
  {path:'userDetails/:id',component:UserDetailsComponent},
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
