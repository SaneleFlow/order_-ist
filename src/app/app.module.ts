import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderComponent } from './order/order.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// import { AppRoutingModule } from './app-routing.module';
import { StorageMap } from '@ngx-pwa/local-storage';
import { Router } from '@angular/router';
import { ViewOrdersComponent } from './view-orders/view-orders.component';
import { EditOrderComponent } from './edit-order/edit-order.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { FormsModule } from '@angular/forms';
// import { AppComponent } from './app.component';

export const routes: Routes = [
  {path:'', component: AppComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    OrderComponent,
    ViewOrdersComponent,
    EditOrderComponent
  ],
  imports: [
    RouterModule.forRoot(routes, {
      
      onSameUrlNavigation : 'reload'
    }),
    BrowserModule,
    // AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
    // CommonModule
    
    
  ],
  providers: [StorageMap],
  bootstrap: [AppComponent]
})
export class AppModule { }
