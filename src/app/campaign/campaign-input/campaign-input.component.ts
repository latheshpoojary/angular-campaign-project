import { Component,OnChanges, OnInit, SimpleChanges } from '@angular/core';
import {ApiService} from '../../service/api.service'
@Component({
  selector: 'app-campaign-input',
  templateUrl: './campaign-input.component.html',
  styleUrls: ['./campaign-input.component.scss']
})
export class CampaignInputComponent implements OnInit{
  public activeProgress:any=null;
  public doneProgress:any=null;
  constructor(private api:ApiService){}
 ngOnInit(): void {
   this.api.progressActive.subscribe(res=>{
    this.activeProgress = res;
   })
   this.api.progressDone.subscribe(res=>{
    this.doneProgress = res;
   })
 }
 }


