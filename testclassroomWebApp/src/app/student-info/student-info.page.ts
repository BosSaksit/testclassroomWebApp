import { student } from './../models/classroom';
import { CallapiService } from './../service/callapi.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.page.html',
  styleUrls: ['./student-info.page.scss'],
})
export class StudentInfoPage implements OnInit {
  getStatus:string;
  getid:string
  datastudent:student;
  

  constructor(public activate:ActivatedRoute, public callapi :CallapiService) { 
    this.getStatus = this.activate.snapshot.paramMap.get('status');
    console.log(this.getStatus);
    this.getid = this.activate.snapshot.paramMap.get('idstudent');
    console.log(this.getid);
   
    if (this.getStatus == "Info" || this.getStatus == "Edit") {
      this.getdataStudentByid();
    }
  }

  ngOnInit() {
  }

  getdataStudentByid(){
    this.callapi.getDataStudentByid(this.getid).subscribe(it =>{
      this.datastudent = it;
      console.log(this.datastudent);
    });
  }

  changeStatusEdit(){
    if (this.getStatus == "Info") {
      this.getStatus = "Edit";
    }
  }

  editdataStudent(){
    this.callapi.editDataStudentByid(this.datastudent).subscribe(it =>{
      console.log(it);
      this.datastudent = it;
      this.getStatus = "Info"
    });
  }



}
