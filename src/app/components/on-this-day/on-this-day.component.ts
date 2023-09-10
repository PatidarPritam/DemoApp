import { Component } from '@angular/core';
import { ApiserviceService } from 'src/app/Service/Service';
@Component({
  selector: 'app-on-this-day',
  templateUrl: './on-this-day.component.html',
  styleUrls: ['./on-this-day.component.css']
})
export class OnThisDayComponent {
  data:any;
  displayData:Array<any>;
  displayDeathData:Array<any>;
  constructor(private _apiservice:ApiserviceService){ 
    this.displayData=[];
    this.displayDeathData=[];
  }

  ngOnInit(){
    this.getBirthData();
    this.getDeathData();
   }
  getBirthData(){
    //console.log("get birth data");
    let currentDate=new Date();
    this._apiservice.getBirthData(currentDate).subscribe(res=>{
    this.data=res;
    for(let i=0;i<2;i++){
      let personVo = {
        name:String,
        description:String,
        thumbnail:String   
      }
      personVo.name = this.data.births[i].pages[0].title;
      personVo.thumbnail=this.data.births[i].pages[0].thumbnail ?.source; 
      personVo.description = this.data.births[i].pages[0].description;
      
       this.displayData.push(personVo);
   }
      this.displayData;
      // console.log(this.displayData);
      // console.log(this.data.births);
      // console.log(currentDate);
     
    })
  }
  getDeathData(){
   // console.log("get Death data");
    let currentDate=new Date();
    this._apiservice.getDeathData(currentDate).subscribe(res=>{
    this.data=res;
    for(let i=0;i<2;i++){
      let personVo = {
        name:String,
        description:String,
        thumbnail:String   
      }
      personVo.name = this.data.deaths[i].pages[0].title;
      personVo.thumbnail=this.data.deaths[i].pages[0].thumbnail ?.source;  
      personVo.description = this.data.deaths[i].pages[0].description;
      
       this.displayDeathData.push(personVo);
   }
      this.displayDeathData;
  })
  }
      
}




