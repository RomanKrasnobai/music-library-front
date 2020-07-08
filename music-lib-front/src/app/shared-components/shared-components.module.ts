import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {RouterModule} from '@angular/router';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import {MatTreeModule} from '@angular/material/tree';
import {UpperCaseFirstLetterPipe} from '../pipes/upper-case-first-letter.pipe';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';


@NgModule({
  declarations: [
    HeaderComponent,
    LeftMenuComponent,
    UpperCaseFirstLetterPipe,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatTreeModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
  ],
  exports: [
    HeaderComponent,
    LeftMenuComponent,
  ]
})
export class SharedComponentsModule { }
