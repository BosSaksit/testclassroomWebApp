import { Component, OnInit } from '@angular/core';
import { CallapiService } from '../service/callapi.service';
import { student } from '../models/classroom';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.page.html',
  styleUrls: ['./student.page.scss'],
})
export class StudentPage implements OnInit {

  studentData:student;
  statusContent:string;

  constructor(public callapi:CallapiService, public router:Router) { }

  ngOnInit() {
    
  }

  ionViewWillEnter() {
    this.getdataStudentall();
  }

  getdataStudentall(){
    this.callapi.getDataStudentAll().subscribe(it =>{
      this.studentData = it;
      console.log(this.studentData);
    });
  }

  gotoAddStudent(){
    this.statusContent = "Add";
    this.router.navigate(['/student-info',{status:this.statusContent}]);
  }

  gotoEditStudent(id2){
    this.statusContent = "Edit";
    this.router.navigate(['/student-info',{status:this.statusContent,  idstudent:id2}]);
  }

  gotoInfoStudent(id){
    this.statusContent = "Info";
    this.router.navigate(['/student-info',{status:this.statusContent, idstudent:id}]);
  }

}
