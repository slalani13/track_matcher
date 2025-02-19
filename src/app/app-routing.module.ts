import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CasualComponent } from './casual/casual.component';
import { CompetitiveComponent } from './competitive/competitive.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "casual", component: CasualComponent },
  { path: "competitive", component: CompetitiveComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
