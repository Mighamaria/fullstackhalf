import { Component, OnInit } from '@angular/core';
import { EmployeRegService } from '../employe-reg.service';
import { User } from '../User';

@Component({
  selector: 'app-menu-card',
  templateUrl: './employee-reg.component.html',
  styleUrls: ['./employee-reg.component.css']
})
export class EmployeeRegComponent implements OnInit{
  user:User=new User("","",0,"");
  message: any;
    constructor(private service:EmployeRegService){
      
    }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  ngOnChanges(){

  }
  public registerNow(){
    let resp=this.service.doRegistration(this.user);
    resp.subscribe(data=>this.message=data);
  }

}