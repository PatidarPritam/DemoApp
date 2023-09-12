import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiserviceService } from 'src/app/Service/Service';
@Component({
  selector: 'app-view-page',
  templateUrl: './view-page.component.html',
  styleUrls: ['./view-page.component.css']
})
export class ViewPageComponent {
  data:any;
  name:string;
  constructor(private _apiservice:ApiserviceService,private route:ActivatedRoute){ 
  this.name=" ";
}

ngOnInit(){
    this.route.params.subscribe(params=>{
  //  console.log(params['name'])
    this.name=params['name']
    this.getViewPage(this.name);
  
  })
 }
  getViewPage(name:string){
   // console.log("get view page data");
    this._apiservice.getViewPage(name).subscribe(res=>{
    this.data=res;
     })
 }

}
