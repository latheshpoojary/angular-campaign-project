import { Component ,OnInit} from '@angular/core';
import { FormBuilder,FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../../service/api.service';
import {CampaignInputComponent} from './../campaign-input/campaign-input.component';
@Component({
  selector: 'app-campaign-details',
  templateUrl: './campaign-details.component.html',
  styleUrls: ['./campaign-details.component.scss']
})
export class CampaignDetailsComponent implements OnInit{
  formDetails!: FormGroup;
  constructor(private formBuilder:FormBuilder,private api:ApiService ,private camapignInput:CampaignInputComponent){}
ngOnInit(): void {
  this.api.progressActive.subscribe(res=>{
    res.camaping = true;
    this.camapignInput.ngOnInit();
  })
  this.formDetails = this.formBuilder.group({
    objective:['',Validators.required],
    category:['option1'],
    offer_type:['option1'],
    comment:['',Validators.required]
  })
}
  
  // getDetails(){
    
  //   const formData = this.formDetails.value;
  //   console.log(formData);
    
  //   this.api.setFormData(this.formDetails);
    
  // }

  sendActivation(){
    const formData = this.formDetails.value;
   
    this.api.setFormData(formData);
    
      this.api.progressDone.subscribe(res=>{
        res.camaping=true;
        
        this.camapignInput.ngOnInit();
        
        
      })
  
    
  }
    
  }
  

