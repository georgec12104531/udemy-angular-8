import { RecipeService } from './recipe.service';
import { Component, OnInit, Input } from '@angular/core';
import Recipe from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  @Input() selectedRecipe: Recipe;
  constructor() { }

  ngOnInit() {
  }

}
