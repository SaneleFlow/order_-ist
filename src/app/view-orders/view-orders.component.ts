import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user-service.service';

import { StorageMap } from '@ngx-pwa/local-storage';

import { AppRoutingModule } from '../app-routing.module';
import { Router } from '@angular/router';


@Component({
  selector: 'app-view-orders',
  templateUrl: './view-orders.component.html',
  styleUrls: ['./view-orders.component.scss']
})
export class ViewOrdersComponent implements OnInit {

  orderDetails:any;

  constructor(private userService:UserService, public storage:StorageMap, private router:Router) { }

  ngOnInit(): void {

    this.storage.get('order_id').subscribe(val =>{

    //  newId = val

this.getMore(val);
  
      
      console.log(val)
    })
  }

  getMore(val : any){

    
    this.userService.viewOrder(val).subscribe(moreData => {

      // console.log(allorders)

      this.orderDetails = moreData




    })
  }



}
