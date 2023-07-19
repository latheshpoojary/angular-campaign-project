import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CampaignInputComponent } from './campaign-input/campaign-input.component';
import { LocationDetailsComponent } from './location-details/location-details.component';
import { CampaignDetailsComponent } from './campaign-details/campaign-details.component';

const routes: Routes = [
  
  {path:'campaign',component:HeaderComponent},
  {path:'campaign-input',component:CampaignInputComponent,children:[
    {path:'',redirectTo:'campaign-details',pathMatch:'full'},
    {path:'campaign-details',component:CampaignDetailsComponent},
    {path:'location',component:LocationDetailsComponent}
  ]},
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
