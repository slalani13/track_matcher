import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { CasualComponent } from './Pages/casual/casual.component';
import { CompetitiveComponent } from './Pages/competitive/competitive.component';

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
