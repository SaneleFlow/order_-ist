import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditOrderComponent } from './edit-order/edit-order.component';
import { OrderComponent } from './order/order.component';
import { ViewOrdersComponent } from './view-orders/view-orders.component';
import { Router } from '@angular/router';

const routes: Routes = [
  { path: 'order', component: OrderComponent },
  { path: 'edit', component: EditOrderComponent },
  { path: 'view', component: ViewOrdersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
