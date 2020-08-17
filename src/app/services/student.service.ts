import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../helpers/student'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private _url: string = 'https://jsonplaceholder.typicode.com/users'
  // private _url: string = '../assets/data/students.json'
  constructor(private http: HttpClient) { }

  getStudent(): Observable<any[]> {
    return this.http.get<any[]>(this._url)
  }

}
