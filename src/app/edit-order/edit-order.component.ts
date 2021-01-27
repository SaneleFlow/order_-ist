import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user-service.service';

import { StorageMap } from '@ngx-pwa/local-storage';

import { Router } from '@angular/router';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.scss']
})
export class EditOrderComponent implements OnInit {

  orderDetails: any;

  order_id: any;
  customer: any;
  status: any;
  order_date: any;


  product_name: any;
  cost: any;
  quantity: any;

  constructor(private userService: UserService, public storage: StorageMap, private router: Router) { }

  ngOnInit(): void {

    this.storage.get('order_id').subscribe(val => {

      //  newId = val

      this.getMore(val);
      this.order_id = val;


      console.log(val)
    })
  }

  getMore(val: any) {


    this.userService.viewOrder(val).subscribe(moreData => {

      // console.log(allorders)

      this.orderDetails = moreData




    })
  }


  editOrder() {

    // this.userService.order_id=this.order_id;
    this.userService.customer = this.customer;
    this.userService.order_date = this.order_date;
    this.userService.status = this.status;


    this.userService.product_name = this.product_name;
    this.userService.cost = this.cost;
    this.userService.quantity = this.quantity;


    // console.log('Your Identity is', val);

    this.userService.editOrder(this.order_id, this.customer, this.status, this.order_date,this.product_name, this.cost, this.quantity).subscribe(dataReturnFromService => {


      console.log(dataReturnFromService)



    }


    )

    // this.router.routeReuseStrategy.shouldReuseRoute = function () {
    //   return false;
    // };

  }



}
