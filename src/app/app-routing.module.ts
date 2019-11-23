import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './users/add-user/add-user.component';
import { UserHomeComponent } from './users/user-home/user-home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductHomeComponent } from './components/product/product-home/product-home.component';
import { ProductFormComponent } from './components/product/product-form/product-form.component';
import { RegistrationComponent } from './auth/registration/registration.component';

const routes: Routes = [
  // load routes in order
  { path: 'home', component: DashboardComponent},
  { path: 'auth' , loadChildren: './auth/auth.module#AuthModule'},
  // user routes, -> register / login / my products/ my cart / my orders
  { path: 'users', component: UserHomeComponent},
  { path: 'user/edit/:id', component: UserComponent},
  { path: 'user/add', component: UserComponent},
  // product routes -> add , update, 
  { path: 'products', component: ProductHomeComponent},
  { path: 'products/add', component: ProductFormComponent},
  { path: 'products/edit/:id', component: ProductFormComponent},
  { path: '**', redirectTo: '/home'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
