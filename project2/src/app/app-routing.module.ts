import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { CartComponent } from './cart/cart.component';
import { CalcbootstrapComponent } from './calcbootstrap/calcbootstrap.component';


const routes: Routes = [
  {path:"home", component:HomeComponent},
 
    {path:"calcbootstrap", component:CalcbootstrapComponent},
    {path:"employeedetails", component:EmployeedetailsComponent},
    {path:"productdetails", component:ProductdetailsComponent},
    {path:"cart", component:CartComponent},
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
