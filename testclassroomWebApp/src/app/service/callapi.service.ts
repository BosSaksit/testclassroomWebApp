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
}
