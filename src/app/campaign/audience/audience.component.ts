import { Component ,OnInit} from '@angular/core';
import {ApiService} from '../../service/api.service';
import {CampaignInputComponent} from '../campaign-input/campaign-input.component'

@Component({
  selector: 'app-audience',
  templateUrl: './audience.component.html',
  styleUrls: ['./audience.component.scss']
})
export class AudienceComponent implements OnInit{
  
  public content=false;
  buttonText = "";
  constructor(private api:ApiService,private campaignInput:CampaignInputComponent){}
  ngOnInit(): void {
    this.api.progressActive.subscribe(res=>{
      res.audience = true;
    })
  }
  
  
  
  
  showDetails(btn:any){
    
    this.buttonText = btn.textContent;
    let withoutIcon = this.buttonText.substring(0,this.buttonText.length-1);
    if(this.content){
      withoutIcon+='▲';
      
    }
    else{
      withoutIcon+='▼';
      
    }
    btn.textContent= withoutIcon;

    
    
    
    this.content = !this.content;
    console.log();
    
  }



  goBack(){
    this.api.progressActive.subscribe(res=>{
      res.audience = false;
      this.campaignInput.ngOnInit();
      
    })
    this.api.progressDone.subscribe(res=>{
      res.location =false;
    })
    
  }

  goNext(){
    this.api.progressDone.subscribe(res=>{
      res.audience = true;
    })
    
  }
}
