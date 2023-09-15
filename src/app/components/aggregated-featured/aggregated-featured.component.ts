import { Component } from '@angular/core';
import { ApiserviceService } from 'src/app/Service/Service';

@Component({
  selector: 'app-aggregated-featured',
  templateUrl: './aggregated-featured.component.html',
  styleUrls: ['./aggregated-featured.component.css']
})

 export class AggregatedFeaturedComponent {
  data:any;
  displayData:Array<any>;
  constructor(private _apiservice:ApiserviceService){ 
  this.displayData=[];
  }
  ngOnInit(){
    this. getAggregated();
   }
   getAggregated(){
    let currentDate=new Date();
    this._apiservice.getAggregated(currentDate).subscribe(res=>{
    this.data=res;
    
    for(let i=0;i<5;i++){
     let Aggregated={
        name:String,
        thumbnail:String,
        description:String,
        extract:String,
     }
        Aggregated.name = this.data.mostread.articles[i].title;
        Aggregated.thumbnail=this.data.mostread.articles[i].thumbnail ?.source; 
        Aggregated.description = this.data.mostread.articles[i].description;
        Aggregated.extract = this.data.mostread.articles[i].extract;
      
      this.displayData.push(Aggregated);
    } 
      this.displayData;
    })
 }

}