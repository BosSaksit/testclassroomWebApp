import { classroom } from './../models/classroom';
import { AlertController } from '@ionic/angular';
import { CallapiService } from './../service/callapi.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-classroom',
  templateUrl: './classroom.page.html',
  styleUrls: ['./classroom.page.scss'],
})
export class ClassroomPage implements OnInit {

  dataClassroom = {
    "classroomId":null,
    "classroomName":null,
    "classStudent":null,
    "classTeacher":null
  };

  getclassrooom:classroom

  constructor(public alertController:AlertController, public router:Router , public callapi:CallapiService) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.getdataclassroomAll();
  }

  deleteClassroom(classroomid){
    this.callapi.deletedClassroom(classroomid).subscribe(it =>{
      this.getdataclassroomAll();
    });
  }

  getdataclassroomAll(){
    this.callapi.getDataClassroomAll().subscribe(it =>{
      this.getclassrooom = it;
    });
  }

  gotoInfoClassroom(id){
    this.router.navigate(['/classroom-info', { status:"Info" , classroomid:id}])
  }

  gotoAddStudentClassroom(id){
    this.router.navigate(['/classroom-info', { status:"student" , classroomid:id}])
  }

  gotoAddTeacherClassroom(id){
    this.router.navigate(['/classroom-info', { status:"teacher" , classroomid:id}])
  }

  async createClassRoom(){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'กรอกชื่อห้อง',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          
        },
        
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: data => {
            console.log('Confirm Ok');
            this.dataClassroom.classroomName = data.name1;
            console.log(this.dataClassroom);
            this.callapi.createclassroom(this.dataClassroom).subscribe(it =>{
              console.log(it);
              this.ionViewWillEnter()
            });
          }
        }
      ]
    });

    await alert.present();
  }



}
