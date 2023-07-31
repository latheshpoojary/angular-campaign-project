import { Component ,OnInit} from '@angular/core';
import { FormBuilder,FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {ApiService} from '../../service/api.service';
import {CampaignInputComponent} from './../campaign-input/campaign-input.component';
@Component({
  selector: 'app-campaign-details',
  templateUrl: './campaign-details.component.html',
  styleUrls: ['./campaign-details.component.scss'],
  
})
export class CampaignDetailsComponent implements OnInit{
  formDetails!: FormGroup;
  formData:any;
  constructor(private formBuilder:FormBuilder,private api:ApiService ,private camapignInput:CampaignInputComponent){  
  }
ngOnInit(): void {
  this.formData=this.api.getForm();
  this.formDetails = this.formBuilder.group({
    name:[this.formData.name,
      Validators.required
    ],
    objective:[this.formData.objective,Validators.required],
    category:[this.formData.category],
    request:[this.formData.dieses],
    status:[this.formData.status],
    CTR:[this.formData.CTR],
    offer_type:[this.formData.offer_type],
    comment:[this.formData.comment],
    location:this.formBuilder.array([])
  })

  this.api.progressActive.subscribe(res=>{
    res.camaping = true;
  }) 
}

  get form(){
    return this.formDetails.controls;
  }

  sendActivation(){
    console.log(this.formDetails.controls);
    const formData = this.formDetails.value;
    this.api.setFormData(formData);
    this.api.progressDone.subscribe(res=>{
        res.camaping=true;  
    }) 
  }    
}
  

