import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatDividerModule} from '@angular/material/divider';


const MaterialComponents = [
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatBadgeModule,
  MatGridListModule,
  MatInputModule,
  MatTableModule,
  MatDividerModule
];

@NgModule({
  imports: [MaterialComponents],
  exports:[MaterialComponents]
})
export class MaterialModule { 
}
