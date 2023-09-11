import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class ApiserviceService {
constructor(private _http:HttpClient) { }

// for oneThisDay
getBirthData(currentDate:Date){
              let day =  currentDate.getDate();
              let month = currentDate.getMonth() + 1;              
             // console.log(day);
              //console.log(month)
              return this._http.get('https://en.wikipedia.org/api/rest_v1/feed/onthisday/births/'+month +'/'+ day);
            
        }
getDeathData(currentDate:Date){
            let day =  currentDate.getDate();
            let month = currentDate.getMonth() + 1;              
            return this._http.get('https://en.wikipedia.org/api/rest_v1/feed/onthisday/deaths/'+month +'/'+ day);
          
      }     
    
// for announcement
 getAnnouncement(){
   
      return this._http.get('https://en.wikipedia.org/api/rest_v1/feed/announcements')
 }


 }

