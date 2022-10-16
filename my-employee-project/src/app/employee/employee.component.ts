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
  public name='';
  public price='';

  public NewEmployeeData={
    id:0,
    firstName:'',
    lastName:'',
    fullName:'',
    presentAddress:'',
    permanentAddress:'',
    city:'',
    state:'',
    postalCode:'',
    phoneNo:'',
    emailAddress:'',
    name:'',
    price:''
  };
  public AddNewEmployeeData(){
    this.NewEmployeeData={
      id:0,
      firstName:this.firstName,
      lastName:this.lastName,
      fullName:this.fullName,
      presentAddress:this.presentAddress,
      permanentAddress:this.permanentAddress,
      city:this.city,
      state:this.state,
      postalCode:this.postalCode,
      phoneNo:this.phoneNo,
      emailAddress:this.emailAddress,
      name:this.name,
      price:this.price
    };
    this.updateEmployeedetails(this.NewEmployeeData);
  }

  updateEmployeedetails(NewAddEmployeeData:any){
    this.addEmployeeService.updateEmployeedetails(NewAddEmployeeData).subscribe(
      () => {              
        this.firstName=''
        this.lastName='';
        this.fullName='';
        this.presentAddress='';
        this.permanentAddress=''
        this.city='';
        this.state='';
        this.postalCode='';
        this.phoneNo=''
        this.emailAddress='';
        this.name='';
        this.price='';
        alert("update Succefully");  
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
