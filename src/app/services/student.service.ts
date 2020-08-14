import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }

  getStudent() {
    return [
      { rollno: 102, name: 'Mounika', interested: "Social", hobbies: "Playing, Music" },
      { rollno: 103, name: 'Rani', interested: "Science", hobbies: "Playing, Movies" },
      { rollno: 104, name: 'Vaishnavi', interested: "Language", hobbies: "Music, Reading" },
      { rollno: 105, name: 'Vamsi', interested: "Mathematics", hobbies: "Playing, Chess" },
      { rollno: 106, name: 'Satish', interested: "Computer Science", hobbies: "Singing, Cricket" }
    ]
  }

}
