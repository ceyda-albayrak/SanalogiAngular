import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/category';
import { ListResponseModel } from 'src/app/models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  apiUrl= "https://localhost:5001/"

  constructor(private httpClient: HttpClient) { }

  getCategories():Observable<ListResponseModel<Category>>{
    let newPath=this.apiUrl+"GetCategories";
    return this.httpClient.get<ListResponseModel<Category>>(newPath);
  }

}
