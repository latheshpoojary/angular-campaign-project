import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../service/api.service';
// import {} from '../header';
import {CampaignInputComponent} from './../campaign-input/campaign-input.component';
@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.scss']
})
export class LocationDetailsComponent implements OnInit{
  public location!:string;
  public formData:any;
  public myLocation:any=[];
  constructor(private api:ApiService,private campaignInput:CampaignInputComponent){}
  ngOnInit(): void {
   
    this.api.progressActive.subscribe(res=>
      res.location=true);
    
    
    
  }
  backToCamapign(){
    this.api.progressActive.subscribe(res=>{
      res.location = false;
      this.campaignInput.ngOnInit();
      
    })
    this.api.progressDone.subscribe(res=>{
      res.location = false;
      this.campaignInput.ngOnInit();
    })
  }
  goNext(){
    this.api.progressActive.subscribe(res=>{
      res.audience = true;
      this.campaignInput.ngOnInit();
    })
    this.api.progressDone.subscribe(res=>{
      res.location = true;
      this.campaignInput.ngOnInit();
    })
    this.formData = this.api.getForm();
    this.formData.location = this.location;
    
    
    
  }
  addLocation(){
    this.myLocation.push(this.location);
    console.log(this.myLocation);
    
    
  }

}
