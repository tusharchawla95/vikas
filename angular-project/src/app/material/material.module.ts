import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';

const material = [
  MatButtonModule,
  MatToolbarModule,
  MatGridListModule,
  MatCardModule,
  MatInputModule
];

@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }
