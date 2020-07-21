import { teacher } from './../models/classroom';
import { CallapiService } from './../service/callapi.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.page.html',
  styleUrls: ['./teacher.page.scss'],
})
export class TeacherPage implements OnInit {

  dataTeacher: teacher
  statusReadOnly: boolean;
  constructor(public callapi: CallapiService, public router: Router) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.getdataTeacher();
  }

  getdataTeacher() {
    this.callapi.getDataTeacherAll().subscribe(it => {
      this.dataTeacher = it;
      console.log(this.dataTeacher);
    });
  }

  gotoAddTeacher() {
    this.router.navigate(['/teacher-info', { status: "10" }]);
  }

  gotoInfoTeacher(id) {
    this.router.navigate(['/teacher-info', { status: true, idteacher: id }]);
  }

  gotoEditTeacher(id) {
    this.router.navigate(['/teacher-info', { status: false, idteacher: id }]);
  }

  delTeacherByid(id) {
   this.callapi.deleteDataTeacher(id).subscribe(it =>{
    this.ionViewWillEnter();
   });
  }

}
