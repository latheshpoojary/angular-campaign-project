import { Injectable } from '@angular/core';
import * as CampaignData from "../data/data.json";
import {BehaviorSubject, from, of} from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public progressActive = new BehaviorSubject<any>({
    camaping:false,
    location:false,
    audience:false
  })
  public progressDone = new BehaviorSubject<any>({
    camaping:false,
    location:false,
    audience:false
  })

  formData:any={
    dieses:'food',
    CTR:"2.5%",
    status:'draft',
    category:'Option1',
    offer_type:'Option2'
  };
  public campaignList = JSON.parse(JSON.stringify(CampaignData)).data;
  getUser(){
    return this.campaignList;
  }
  setFormData(data:any){
    this.formData = data;   
  }
  getForm(){
    return this.formData;
  }
}
