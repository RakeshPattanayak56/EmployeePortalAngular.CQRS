import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {
  data: Employee[]=[];
  dataitem: string;
  filterValue:string;
  userName:string;

  constructor(private employeeService: EmployeeService ){
  }
  ngOnInit(): void {
    this.getAllEmployeedetails();
   }
  getAllEmployeedetails = () =>{
    this.employeeService.getemployees().subscribe(
    (response) => {
      this.data = response;
    });
  }
  onEdit(data: { visible: boolean; }) {
    data.visible = true;
  }
  onRowSubmit(dataitem: any) {
     this.updateEmployeedetails(dataitem);
  }
  updateEmployeedetails(dataitem: Employee){
    this.employeeService.updateEmployeedetails(dataitem).subscribe(
      () => {
        this.dataitem='';
        this.getAllEmployeedetails();
        alert("update Succefully");  
      }
    );
  }
  Search(){
    if(this.userName!=""){

    }else if (this.userName == ""){
      this.ngOnInit();
    }
    this.data = this.data.filter(res=>{
      return res.userName.toLowerCase().match(this.userName.toLowerCase());
    });
  }
  
}
