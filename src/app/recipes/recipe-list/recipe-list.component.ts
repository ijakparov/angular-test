import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test recipe', 'some test descr', 'https://dummyimage.com/600x400/eee/fff.jpg'),
    new Recipe('Test recipe', 'some test descr', 'https://dummyimage.com/600x400/eee/fff.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
