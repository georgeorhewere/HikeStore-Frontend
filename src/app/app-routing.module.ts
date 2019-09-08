import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './users/add-user/add-user.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserHomeComponent } from './users/user-home/user-home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductHomeComponent } from './components/product/product-home/product-home.component';

const routes: Routes = [
  { path:"home", component: DashboardComponent},
  { path:"user/edit/:id", component: UserComponent},
  { path:"user/add", component: UserComponent},  
  { path:"users", component: UserHomeComponent},  
  { path:"products", component: ProductHomeComponent},
  { path:"**", redirectTo:"/home"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
