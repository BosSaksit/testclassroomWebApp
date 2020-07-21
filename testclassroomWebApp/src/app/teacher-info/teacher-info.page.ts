import { CallapiService } from './../service/callapi.service';
import { teacher } from './../models/classroom';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-teacher-info',
  templateUrl: './teacher-info.page.html',
  styleUrls: ['./teacher-info.page.scss'],
})
export class TeacherInfoPage implements OnInit {

  getStatus: any
  getidTeacher: any

  dataTeacher: teacher

  data = {
    "teacherId": null,
    "teacherName": null,
    "subjectTaught": null,
    "teacherTel": null
  }

  constructor(public actived: ActivatedRoute, public callapi: CallapiService) {
    this.getStatus = this.actived.snapshot.paramMap.get('status');
    console.log(this.getStatus);
    this.getidTeacher = this.actived.snapshot.paramMap.get('idteacher');
    console.log(this.getidTeacher);
    if (this.getidTeacher != null) {
      this.getdatateacherByid();
    }


  }

  ngOnInit() {
  }

  getdatateacherByid() {
    this.callapi.getDataTeacherByid(this.getidTeacher).subscribe(it => {
      this.dataTeacher = it;
      console.log(this.dataTeacher);

    });
  }

  adddataTeacher() {
    this.callapi.addDataTeacher(this.data).subscribe(it => {
      console.log(it);

    });
  }

  changeStatus() {
    console.log(this.getStatus);
    
    if (this.getStatus == 'true') {
      this.getStatus = 'false';
    } else {
      this.callapi.editDataTeacherByid(this.dataTeacher).subscribe(it =>{
        console.log(it);
        this.getStatus = 'true';
      });
    }
  }



}
