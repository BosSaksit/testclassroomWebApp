import { teacher, classroom } from './../models/classroom';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { student } from '../models/classroom';


@Injectable({
  providedIn: 'root'
})
export class CallapiService {

  public static host: string = "https://3meetestclassroomapi.azurewebsites.net/api/";

  constructor(public http: HttpClient) { }

  public getDataStudentAll() {
    return this.http.get<student>(CallapiService.host + 'Classroom/GetdataStudentAll');
  }

  public getDataStudentByid(id: string) {
    return this.http.get<student>(CallapiService.host + 'Classroom/GetdataStudentByid/' + id);
  }

  public addDataStudent(data: student) {
    return this.http.post<student>(CallapiService.host + 'Classroom/AddDataStudent', data);
  }

  public editDataStudentByid(data: student) {
    return this.http.put<student>(CallapiService.host + 'Classroom/EditDataStudent', data);
  }

  public deleteDataStudent(id: string) {
    return this.http.delete<student>(CallapiService.host + 'Classroom/DeleteDataStudent/' + id);
  }

  public getDataTeacherAll() {
    return this.http.get<teacher>(CallapiService.host + 'Classroom/GetdataTeacherAll');
  }

  public getDataTeacherByid(id: string) {
    return this.http.get<teacher>(CallapiService.host + 'Classroom/GetdataTeacherByid/' + id);
  }

  public addDataTeacher(data: teacher) {
    return this.http.post<teacher>(CallapiService.host + 'Classroom/AddDataTeacher', data);
  }

  public editDataTeacherByid(data: teacher) {
    return this.http.put<teacher>(CallapiService.host + 'Classroom/EditDataTeacher', data);
  }

  public deleteDataTeacher(id: string) {
    return this.http.delete<teacher>(CallapiService.host + 'Classroom/DeleteDataTeacher/' + id);
  }

  public getDataClassroomAll() {
    return this.http.get<classroom>(CallapiService.host + 'Classroom/GetdataClassroomAll');
  }

  public getDataClassroomByid(id: string) {
    return this.http.get<classroom>(CallapiService.host + 'Classroom/GetdataClassroomByid/' + id);
  }

  public createclassroom(data:classroom) {
    return this.http.post<classroom>(CallapiService.host + 'Classroom/CreateClassroom', data);
  }

  public addteacherInclassroom(classroomid:string , teacherid:string){
    return this.http.get<classroom>(CallapiService.host + 'Classroom/AddTeacherInClassroom/' + classroomid + "/" + teacherid);
  }

  public addstudentInclassroom(classroomid:string , studentid:string){
    return this.http.get<classroom>(CallapiService.host + 'Classroom/AddStudentInClassroom/' + classroomid + "/" + studentid);
  }

  public deletedClassroom(id:string){
    return this.http.delete<classroom>(CallapiService.host + 'Classroom/DeletedClassroom/' + id);
  }
}
