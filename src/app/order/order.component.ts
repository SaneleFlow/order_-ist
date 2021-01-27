import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user-service.service';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

orders :any;

  constructor(private userService:UserService, ) { }

  ngOnInit(): void {


    this.userService.getOrders().subscribe(allorders =>{
  
      console.log(allorders)
      
      this.orders = allorders
      

      

    })

 
  }

}
