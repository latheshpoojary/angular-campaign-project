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
  public location:string='';
  public formData:any;
  public editFlag=false;
  public editIndex='';
  public deleteIndex:number | undefined;
  isEmpty:any;
  toDelete:boolean=false;
  deleteFlag:boolean=false;
  public myLocation:any=[];
  constructor(readonly api:ApiService,private campaignInput:CampaignInputComponent){}
  ngOnInit(): void { 
    this.formData = this.api.getForm();
    this.api.progressActive.subscribe(res=>
      res.location=true
      );
  }

  backToCamapign(){
    this.api.progressActive.subscribe(res=>{
      res.location = false;   
    })
    this.api.progressDone.subscribe(res=>{
      res.location = false;
      res.camaping = false;
    })
  }


  goNext(){
    this.api.progressActive.subscribe(res=>{
      res.audience = true;  
    })

    this.api.progressDone.subscribe(res=>{
      res.location = true; 
    })
  }


  addLocation(){
    if(this.editFlag){
      this.myLocation[this.editIndex]=this.location;
      this.editFlag = false;
    }
    else{
      this.myLocation.unshift(this.location); 
      this.formData.location = this.myLocation;
     
    }  
      this.location ='';
  }

  deleteLocation(index:any){
    this.deleteIndex = index;
    this.toDelete = true;
  }

  deleteConfirmed(){
    if(this.deleteIndex!==undefined){  
      this.formData.location.splice(this.deleteIndex,1); 
    }
    this.toDelete = false;
  }

  onEdit(search:HTMLInputElement,index:any){
    search.value = this.myLocation[index];
    this.editFlag=true;
    this.editIndex=index;
  }

}
