import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { response } from 'express';


@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.css']
})
export class MeetingsComponent {
  meetings:any[]=[];
  message:string='';



  ngOnInit(): void {
    this.getMeetings();
  }

constructor(private http:HttpClient) { }

getMeetings(){
 
  this.http.get('http://localhost:3000/getMeetings')
  .subscribe((response:any)=>
  {this.meetings=response},
  (error)=>{console.error('Error adding the product',error);}
);

}

deleteMeeting(id:number){
  if(confirm('Are you sure you want to delete this meeting?')){
    this.http.delete('http://localhost:3000/deleteMeeting/'+id)
    .subscribe((response:any)=>{
      this.message=response;
      this.getMeetings();},
      (error)=>{console.error('Error deleting the meeting',error);}
    );
}}

}
