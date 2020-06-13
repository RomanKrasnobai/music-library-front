import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {RouterModule} from '@angular/router';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import {MatExpansionModule} from '@angular/material/expansion';



@NgModule({
  declarations: [
    HeaderComponent,
    LeftMenuComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatExpansionModule,
  ],
  exports: [
    HeaderComponent,
    LeftMenuComponent,
  ]
})
export class SharedComponentsModule { }
