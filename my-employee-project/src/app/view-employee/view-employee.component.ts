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
  dataSaved: boolean;
  message:string;

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
  onRowSubmit(Id: any,employeedetails:any) {
     this.putEmployeedetails(Id,employeedetails);
  }
  putEmployeedetails(Id: any,employeedetails:any) {
    this.employeeService.putEmployeedetails(Id,employeedetails).subscribe(
      () => {
        this.dataitem='';
        this.getAllEmployeedetails();
        alert("update Succefully");  
      }
    );
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
  delete(id:number){
    if (confirm("Are you sure you want to delete this ?")) {  
      this.employeeService.deleteEmployee(id).subscribe(() => {
        this.dataSaved = true;
        this.message = 'Record Deleted Succefully';
        this.getAllEmployeedetails();
      });
    }
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
