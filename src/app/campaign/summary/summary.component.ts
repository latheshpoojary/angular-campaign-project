import { Component,OnInit } from '@angular/core';
import {ApiService} from '../../service/api.service'

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit{
public formData :any;
constructor(private api:ApiService){}

ngOnInit(): void {
  this.formData= this.api.getForm();
}
 
goBack(){
  this.api.progressDone.subscribe(res=>{
    res.audience = false;
  })
}

addCampaign(){
  this.formData.id=this.api.campaignList.length+1;
  this.formData.start_date = new Date();
  this.api.campaignList.push(this.formData);
}
}
