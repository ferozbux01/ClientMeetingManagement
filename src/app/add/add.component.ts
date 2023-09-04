import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { response } from 'express';



@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  name:string="";
  topic:string="";
  people:number=0;
  date:string="";
  time:string="";
  message:string="";

  constructor (private http:HttpClient){}

addMeeting(){
  const meetings={
    name:this.name,
    topic:this.topic,
    people:this.people,
    date:this.date,
    time:this.time
  }
  this.http.post('http://localhost:3000/addMeeting',meetings)
  .subscribe((response:any)=>
  {this.message=response
  alert("Meeting added successfully");
  },
  (error)=>{console.error('error adding the meeting ',error)
  });
}
}
