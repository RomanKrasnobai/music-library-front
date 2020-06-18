import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CategoriesService} from '../../services/categories.service';
import {CategoryModel} from '../../models/category.model';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent implements OnInit {
  @Output() selectedCategory = new EventEmitter<CategoryModel>();

  constructor(private categoriesService: CategoriesService) { }

  categories: CategoryModel[];
  selected;

  ngOnInit(): void {
    this.categoriesService.getAllCategories().pipe(
      tap(
        item => this.categories = item
      )
    ).subscribe();
  }

  setSelectedCategory(category, i) {
    this.selectedCategory.emit(category);
    this.selected = i;
  }
}
