import { classroom, teacher, student } from './../models/classroom';
import { CallapiService } from './../service/callapi.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-classroom-info',
  templateUrl: './classroom-info.page.html',
  styleUrls: ['./classroom-info.page.scss'],
})
export class ClassroomInfoPage implements OnInit {

  getStatus: any;
  getid: any;
  getTeacher: teacher;
  getStudent: student;
  getClassroom: classroom;

  constructor(public alertController: AlertController, public router: Router, public callapi: CallapiService, public actived: ActivatedRoute) {
    this.getStatus = actived.snapshot.paramMap.get('status');
    this.getid = actived.snapshot.paramMap.get('classroomid');
    if (this.getStatus == "student") {
      this.getallStudent();
    }
    if (this.getStatus == "teacher") {
      this.getallTeacher();
    }
    if (this.getStatus == "Info") {
      this.getclassroomByid();
    }
  }

  ngOnInit() {
  }

  getclassroomByid() {
    this.callapi.getDataClassroomByid(this.getid).subscribe(it => {
      this.getClassroom = it;
      console.log(this.getClassroom);
      
    });
  }

  getallStudent() {
    this.callapi.getDataStudentAll().subscribe(it => {
      this.getStudent = it;
      console.log(this.getStudent);
    })
  }

  getallTeacher() {
    this.callapi.getDataTeacherAll().subscribe(it => {
      this.getTeacher = it;
      console.log(this.getTeacher);
    });
  }

  addteacherInclassroom(teacherid) {
    this.callapi.addteacherInclassroom(this.getid, teacherid).subscribe(it => {
      this.router.navigate(['/classroom']);
    });
  }

  addstudentInclassroom(studentid) {
    this.callapi.addstudentInclassroom(this.getid, studentid).subscribe(it => {
      this.router.navigate(['/classroom']);
    });
  }






}
