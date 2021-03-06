import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/categoryService/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories: Category[]=[];
  filterText = '';
  filterMetaData = { count : 0 };
  dataLoaded = false;
  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(){
    this.categoryService.getCategories().subscribe(response=>{
      this.categories=response.data;
    
    })
  }

 

}
