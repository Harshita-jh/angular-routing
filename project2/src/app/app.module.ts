import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ProductsearchfilterPipe } from './pipes/productsearchfilter.pipe';
import { EmployeesearchfilterPipe } from './pipes/employeesearchfilter.pipe';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MouseeventDirective } from './directives/mouseevent.directive';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { CartComponent } from './cart/cart.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
// import { CalculatorComponent } from './calculator/calculator.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CalcbootstrapComponent } from './calcbootstrap/calcbootstrap.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    EmployeedetailsComponent,
    ProductdetailsComponent,
    ProductsearchfilterPipe,
    EmployeesearchfilterPipe,
    MouseeventDirective,
    ParentComponent,
    ChildComponent,
    CartComponent,
    TemplateDrivenComponent,
    OneComponent,
    TwoComponent,
    CalcbootstrapComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
