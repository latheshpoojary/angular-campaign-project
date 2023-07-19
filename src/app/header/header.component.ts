import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public current = true;
  public sortString!:string;
  public sortOrder = 'desc';
  public campaignList = [
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



    }
  ]
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
