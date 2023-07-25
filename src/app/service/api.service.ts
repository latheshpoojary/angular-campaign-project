import { Injectable } from '@angular/core';

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
  formData:any='';
  public campaignList =[
    {
      id:123456,
      order:"Food",
      name:"John",
      status:"completed",
      CTR:"2.5%",
      start_date:new Date()



    },
    {
      id:848743,
      order:"Food",
      name:"Seen",
      status:"draft",
      CTR:"1.5%",
      start_date:new Date()



    },
    {
      id:828327,
      order:"Cofee",
      name:"Ramesh",
      status:"completed",
      CTR:"2.5%",
      start_date:new Date()



    },
    {
      id:989438,
      order:"Tesco",
      name:"Vikash",
      status:"scheduled",
      CTR:"2.5%",
      start_date:new Date()



    },
    {
      id:728343,
      order:"Food",
      name:"Dosen",
      status:"completed",
      CTR:"2.5%",
      start_date:new Date()



    },
    {
      id:463782,
      order:"Food",
      name:"Raina",
      status:"completed",
      CTR:"2.5%",
      start_date:new Date()



    },
    
    {
      id:732873,
      order:"Food",
      name:"Bravo",
      status:"completed",
      CTR:"2.5%",
      start_date:new Date()



    },
    {
      id:732873,
      order:"Food",
      name:"Bravo",
      status:"completed",
      CTR:"2.5%",
      start_date:new Date()



    }
  ]
  getUser(){

    return this.campaignList;
  }
  setFormData(data:any){
    console.log(data,"in service");
    
    
    this.formData = data;
    this.formData.status='draft';
    this.formData.location = 'bejai';
    
    
    
  }
  getForm(){
    return this.formData;
  }
}
