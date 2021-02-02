import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user-service.service';

import { StorageMap } from '@ngx-pwa/local-storage';

import { AppRoutingModule } from './app-routing.module';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'appBootstrap';

  closeResult: any;

  orders: any;

  customer: any;
  status: any;
  order_date: any;


  product_name: any;
  cost: any;
  quantity: any;

  order_id: any

  constructor(private userService: UserService, public storage: StorageMap, private router: Router, private modalService: NgbModal) { }

  ngOnInit(): void {


    this.userService.getOrders().subscribe(allorders => {

      // console.log(allorders)

      this.orders = allorders




    })


  }





  veiwOrders(id: number) {



    this.storage.set('order_id', id).subscribe((val) => {


      console.log(val)
    });



    this.router.navigate(["/view"])



  }


  editOrders(id: number) {


    this.storage.set('order_id', id).subscribe((val) => {


      console.log(val)
    });



    this.router.navigate(["/edit"])

  }



  deleteOrders(id: number) {


    this.userService.delete(id).subscribe(moreData => {

      console.log(moreData)

      // this.orderDetails = moreData




    })

  }


  addNewOrder() {

    this.userService.customer = this.customer;
    this.userService.order_date = this.order_date;
    this.userService.status = this.status;

    this.userService.product_name = this.product_name;
    this.userService.cost = this.cost;
    this.userService.quantity = this.quantity;

    this.userService.addOrder(this.customer, this.status, this.order_date, this.product_name, this.cost, this.quantity).subscribe(dataReturnFromService => {


      console.log(dataReturnFromService)



    })

    this.router.navigate(["/view"])

  }




  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
