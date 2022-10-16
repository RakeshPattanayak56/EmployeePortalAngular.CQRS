import { Component, OnInit } from '@angular/core';
import { AddEmployeeService } from '../add-employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  data: any;
  constructor(private addEmployeeService:AddEmployeeService ) { }

  ngOnInit(): void {
  }
  public firstName='';
  public lastName='';
  public fullName='';
  public presentAddress='';
  public permanentAddress='';
  public city='';
  public state='';
  public postalCode='';
  public phoneNo='';
  public emailAddress='';

  public NewEmployeeData={
    id:0,
    firstName:'',
    lastName:'',
    presentAddress:'',
    permanentAddress:'',
    city:'',
    state:'',
    postalCode:'',
    phoneNo:'',
    emailAddress:''
  };
  public AddNewEmployeeData(){
    this.NewEmployeeData={
      id:0,
      firstName:this.firstName,
      lastName:this.lastName,
      presentAddress:this.presentAddress,
      permanentAddress:this.permanentAddress,
      city:this.city,
      state:this.state,
      postalCode:this.postalCode,
      phoneNo:this.phoneNo,
      emailAddress:this.emailAddress
    };
    this.updateEmployeedetails(this.NewEmployeeData);
  }

  updateEmployeedetails(NewAddEmployeeData:any){
    this.addEmployeeService.updateEmployeedetails(NewAddEmployeeData).subscribe(
      () => {              
        this.firstName=''
        this.lastName='';
        this.presentAddress='';
        this.permanentAddress=''
        this.city='';
        this.state='';
        this.postalCode='';
        this.phoneNo=''
        this.emailAddress='';
        alert("updated Succefully");  
      }
    );
  }
  keyPress(event:any) {
    const pattern = /[0-9\+\-\ ]/;
    const inputChar = event.keyCode;
    if (!pattern.test(inputChar) && event.keyCode != 8) {    
      // invalid character, prevent input
      event.preventDefault();
  }
    if(event.target.value.length > 9 && event.keyCode != 8){
      event.preventDefault();
    }

}
}
