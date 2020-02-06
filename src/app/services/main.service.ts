import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { AddComment, Comments } from '../interfaces/data.interface';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient) { }
  arr:any=[];
  index:number;

  url = "https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=33ba70d6367648b49a76910dfad62ad4";
  getData(): Observable<AddComment[]> {
    return this.http.get<AddComment[]>(this.url);
  }

    AddComents(id, data) {
    this.arr.push({"index":id,"data":data,"date":new Date});
  }

  getArr(){
    return this.arr;
  }

  rtnData(id){
     return this.http.get(this.url).subscribe(res => {
      let resources = res["articles"];
      let resource = resources[id];
      if(resource.comment==null){
        resource.comment =[];
      }
      resource["comment"]=this.arr;
      console.log(resource["comment"]);
    }) 
}

}
