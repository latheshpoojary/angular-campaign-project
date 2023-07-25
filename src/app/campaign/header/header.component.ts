import { Component ,OnInit} from '@angular/core';
import {ApiService} from '../../service/api.service'

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
  constructor(private api:ApiService){}
 
ngOnInit(): void {
  this.campaignList =this.api.getUser();
  console.log(this.campaignList);
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
    console.log(this.sortOrder);
    
    
  }
}
