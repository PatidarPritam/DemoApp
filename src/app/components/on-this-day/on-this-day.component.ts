import { Component } from '@angular/core';
import { ApiserviceService } from 'src/app/Service/Service';
@Component({
  selector: 'app-on-this-day',
  templateUrl: './on-this-day.component.html',
  styleUrls: ['./on-this-day.component.css']
})
export class OnThisDayComponent {
  //newdata:any;
  data:any;
  displayData:Array<any>;
  constructor(private _apiservice:ApiserviceService){ 
    this.displayData=[];
  }
  ngOnInit(){
    let currentDate=new Date("10-09-2023");
    this._apiservice.getBirthData(currentDate).subscribe(res=>{
    this.data=res;
    for(let i=0;i<2;i++){
      let personVo = {
        name:String,
        description:String,
        thumbnail:String   //change
      }
      personVo.name = this.data.births[i].pages[0].title;
      personVo.thumbnail=this.data.births[i].pages[0].thumbnail ?.source; //change 
      personVo.description = this.data.births[i].pages[0].description;
      
      this.displayData.push(personVo);
   }
      this.displayData;
      console.log(this.displayData);
      console.log(this.data.births);
      console.log(currentDate);
     })
  }
}




