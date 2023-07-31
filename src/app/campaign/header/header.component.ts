import { Component ,OnInit} from '@angular/core';
import {ApiService} from '../../service/api.service'
import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';

@Component({
  
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{ 
  public current = true;
  public sortString!:string;
  public sortOrder = 'desc';
  public campaignList=[{}];
  public formData:any;
  constructor(private api:ApiService){}
 
ngOnInit(): void {
  this.campaignList =this.api.getUser();
  this.api.progressActive.subscribe(res=>{
    res.camaping=false,
    res.location=false,
    res.audience=false
  })
  this.api.progressDone.subscribe(res=>{
    res.camaping=false,
    res.location=false,
    res.audience=false
  })
 
}
  sortOnDirection(){
    if(this.sortOrder=='asc'){
      this.sortOrder= 'desc';
    }
    else{
      this.sortOrder='asc';
    }
  }
 clearForm(){
  // this.formData = this.api.getForm();
  this.api.setFormData({
    name:'',
    objective:'',
    category:'Option1',
    offer_type:'Option1',
    status:'Draft',
    location:[],
    comment:''

  })
 }
}
