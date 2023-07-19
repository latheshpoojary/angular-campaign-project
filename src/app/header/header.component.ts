import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public current = true;
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
      name:"seen",
      status:"draft",
      CTR:"1.5%",
      start_date:new Date()



    },
    {
      id:828327,
      order:"Cofee",
      name:"ramesh",
      status:"completed",
      CTR:"2.5%",
      start_date:new Date()



    },
    {
      id:989438,
      order:"Tesco",
      name:"Vikash",
      status:"Scheduled",
      CTR:"2.5%",
      start_date:new Date()



    },
    {
      id:728343,
      order:"Food",
      name:"dosen",
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
}
