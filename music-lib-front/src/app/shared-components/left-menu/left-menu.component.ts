import { Component, OnInit } from '@angular/core';
import {CategoriesService} from '../../services/categories.service';
import {CategoryModel} from '../../models/category.model';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent implements OnInit {

  constructor(private categoriesService: CategoriesService) { }

  categories: CategoryModel[];

  ngOnInit(): void {
    this.categoriesService.getAllCategories().pipe(
      tap(
        item => this.categories = item
      )
    ).subscribe();
  }
}
