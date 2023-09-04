const express=require('express')
const bodyParser=require('body-parser')
const cors=require('cors')
const mysql=require('mysql')

const app=express();
const port=3000;

app.use(cors());
app.use(bodyParser.json());
console.log("testing changed");
const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database: 'clientmeeting'
});

db.connect(err=>{
    if(err){
        console.error('Error',err);
    }
    else{
        console.log("connected");
    }
});
app.listen(port,()=>{console.log("Server 3000")});
app.get('/getMeetings/:id',(req,res)=>{
    const sql='select * from meetings where id=?';
    const id=req.params.id;
    db.query(sql,[id],(err,result)=>{
        if(err){
        console.error('Error in fetching the Meeting',err);
        res.status(500).json({error:'An error occured'});
    }else{
        res.status(200).json(result);
    }
    
    
    });
    });
app.get('/getMeetings',(req,res)=>{
    const sql='select * from meetings';
    db.query(sql,(err,result)=>{
        if(err){
        console.error('Error in fetching the Meeting',err);
        res.status(500).json({error:'An error occured'});
    }else{
        res.status(200).json(result);
    }
    
    
    });
    });
    app.delete('/deleteMeeting/:id',(req,res)=>{
        const id=req.params.id;
      
        const sql='delete from meetings where id=?';
        db.query(sql,[id],(err,result)=>{
            if(err){
                console.error('Error in deleting the Meeting',err);
                res.status(500).json({error:'An error occured'});
            }
            else{
                res.status(200).json({message:'Meeting deleted successfully'});
            }
        });
    });
    app.post('/addMeeting',(req,res)=>{
        const {name, topic,people,date,time}=req.body;
        console("Values are here"+name, topic,people,date,time)
        const sql="insert into meetings(name,topic,people,date,time) values(?,?,?,?,?)";
        db.query(sql,[name, topic,people,date,time],(err,result)=>{
            if(err){
                console.error('Error in adding the meeting',err);
                res.status(500).json({error:'An error occured'});
            }
            else{
                res.status(200).json({message:'Meeting Added successfully'});
            }
        });
    });
    app.put('/updateMeeting',(req,res)=>{
        const {name, topic,people,date,time, id}=req.body;
        const sql="update meetings set name=?,topic=?,people=?,date=?,time=? where id=?";
        db.query(sql,[name, topic,people,date,time,id],(err,result)=>{
            if(err){
                console.error('Error in updating the meeting',err);
                res.status(500).json({error:'An error occured'});
            }
            else{
                res.status(200).json({message:'Meeting Updated successfully'});
            }
        });
    });