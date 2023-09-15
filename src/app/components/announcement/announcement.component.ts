import { Component } from '@angular/core';
import { ApiserviceService } from 'src/app/Service/Service';
@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.css']
})
export class AnnouncementComponent {

  data:any;
  displayData:Array<any>
  constructor(private _apiservice:ApiserviceService){ 
  this.displayData=[];
  }

    ngOnInit(){
     this.getAnnouncement();
    }
    getAnnouncement(){
     this._apiservice.getAnnouncement().subscribe(res=>{
     this.data=res;

     for(let i=0;i<this.data.announce.length;i++){
      let AnnouncementVo = {
        text:String,
      }
      AnnouncementVo.text = this.data.announce[i].text;
      this.displayData.push(AnnouncementVo);
   }
       this.displayData;
      
      })
  }
  
}