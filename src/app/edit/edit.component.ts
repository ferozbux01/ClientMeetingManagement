import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  id:number=0;
  name:string="";
  topic:string="";
  people:number=0;
  date:string="";
  time:string="";
  message:string="";
  meetings:any[]=[];


  constructor(private http:HttpClient,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{
      const idParam=params.get('id');
      if(idParam!==null){
        this.id=+idParam;
          this.getMeetings();
        }
        else{
          console.error("id is missing  or null");
        }
  
  
      })
  
  }


getMeetings(){
 
  this.http.get('http://localhost:3000/getMeetings/'+this.id)
  .subscribe((response:any)=>
  {
    const data=response[0];
    this.id=data.id;
    this.name=data.name;
    this.topic=data.topic;
    this.people=data.people;
    this.date=data.date;
    this.time=data.time;
  
  },
  (error)=>{console.error('Error adding the product',error);}
);
}





updateMeeting(){
  const meetings={
    id:this.id,
    name:this.name,
    topic:this.topic,
    people:this.people,
    date:this.date,
    time:this.time
  }
  this.http.put('http://localhost:3000/updateMeeting',meetings)
  .subscribe((response:any)=>
  {this.message=response
    {this.message=response.message;this.router.navigate(['/'])}
  
  },
  (error)=>{console.error('error updating the meeting ',error)
  });
}
}
