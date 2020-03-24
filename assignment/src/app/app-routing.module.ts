import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HeaderComponent} from './shared/header/header.component';
import {FooterComponent} from './shared/footer/footer.component';
import {HomeComponent} from './shared/home/home.component';
import {ErrorsComponent} from './shared/errors/errors.component';



const routes: Routes = [
  {path: '' ,redirectTo: 'home', pathMatch:'full'},
  {path: 'home',component: HomeComponent},
  {path: 'header', component: HeaderComponent},
  {path: 'footer', component: FooterComponent},
  {path: '**', component:ErrorsComponent, pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
