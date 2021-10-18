import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { AddcustomerComponent } from './customer/addcustomer/addcustomer.component';
import { DeletecustomerComponent } from './customer/deletecustomer/deletecustomer.component';
import { ViewcustomerComponent } from './customer/viewcustomer/viewcustomer.component';
import { UpdatecustomerComponent } from './customer/updatecustomer/updatecustomer.component';
import { ProductComponent } from './product/product.component';
import { ViewproductComponent } from './product/viewproduct/viewproduct.component';
import { DeleteproductComponent } from './product/deleteproduct/deleteproduct.component';
import { UpdateproductComponent } from './product/updateproduct/updateproduct.component';
import { LayoutComponent } from './layout/layout.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    AddcustomerComponent,
    DeletecustomerComponent,
    ViewcustomerComponent,
    UpdatecustomerComponent,
    ProductComponent,
  
    ViewproductComponent,
    DeleteproductComponent,
    UpdateproductComponent,
    LayoutComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
