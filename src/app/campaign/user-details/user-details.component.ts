import { Component ,OnInit} from '@angular/core';
import {ApiService} from '../../service/api.service';
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit{
  userDetails: any | null = null;
  userID: any | null = null;
  index!:number;
  toDelete=false;
  showEdit=false;
  constructor(private api: ApiService, private route: ActivatedRoute) {}
  
  ngOnInit(): void {
    this.userID = this.route.snapshot.paramMap.get('id');
    console.log(this.userID);
    this.userDetails = this.api.getUser().find((item:any)=>item.id.toString()===this.userID);
    };
    onEdit(id:any){
      this.showEdit= true;  
    }
    onDelete(id:any){
      this.index = id-1;
      console.log(this.index);  
      this.toDelete = true;
    }
    deleteConfirmed(){
      this.api.getUser().splice(this.index,1);
    }
  }
  

