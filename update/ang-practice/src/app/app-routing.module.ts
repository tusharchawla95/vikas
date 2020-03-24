import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  { path: "", redirectTo:"/home", pathMatch: "full"},
  { path:"home", component:HomeComponent},
  { path:"settings", component: SettingsComponent },
  { path: "**", redirectTo:"/home"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
