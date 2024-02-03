import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class ApiserviceService {
constructor(private _http:HttpClient) { }
 getBirthData(currentDate:Date){
              let day =  currentDate.getDate();
              let month = currentDate.getMonth() + 1;              
            
              return this._http.get('https://en.wikipedia.org/api/rest_v1/feed/onthisday/births/'+month +'/'+ day);
            
        }
 getDeathData(currentDate:Date){
            let day =  currentDate.getDate();
            let month = currentDate.getMonth() + 1;              
            return this._http.get('https://en.wikipedia.org/api/rest_v1/feed/onthisday/deaths/'+month +'/'+ day);
          
      }     
    

 getAnnouncement(){
   
      return this._http.get('https://en.wikipedia.org/api/rest_v1/feed/announcements')
 }


 getAggregated(currentDate:Date){
     let day = currentDate.getDate().toString().padStart(2, '0'); 
     let month = (currentDate.getMonth() + 1).toString().padStart(2, '0')
     let year = currentDate.getFullYear();
     return this._http.get('https://en.wikipedia.org/api/rest_v1/feed/featured/'+year+'/'+month +'/'+ day)

}

  getViewPage(name:string){
   
      return this._http.get('https://en.wikipedia.org/api/rest_v1/page/html/'+name,{responseType: 'text'})

  }

}
