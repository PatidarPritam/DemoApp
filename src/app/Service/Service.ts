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
              console.log(day);
              console.log(month)
             //return this._http.get('https://mocki.io/v1/6237ceb7-e2a6-4410-9de0-bd94ed69e502');
             return this._http.get('https://en.wikipedia.org/api/rest_v1/feed/onthisday/births/'+month +'/'+ day);
            
        }
 }

