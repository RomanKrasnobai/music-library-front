import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {CategoryModel} from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  constructor(private http: HttpClient) {
  }

  getAllCategories() {
    return this.http.get<CategoryModel[]>(`/api/categories`);
  }
}
