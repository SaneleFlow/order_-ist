import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class UserService {

  apiUrl = 'https://order-console.herokuapp.com/api/';   
  
  // apiUrl= 'http://orders.test/api/';   

  // id ='';


  order_id:any;
  customer:any;
  status:any;
  order_date:any;

  
product_name:any;
cost:any;
quantity:any;

  constructor(public http: HttpClient) {}



  viewOrder(val : number) {
  var url = this.apiUrl+"viewOrder";
  return this.http.post(url,{id:val},
    {headers:new HttpHeaders ({"content-Type":"application/json"})});
}


getOrders() {
  return this.http.get(this.apiUrl+"getOrders");

}



editOrder(id: number,customer : string ,status: string ,order_date: string , product_name: string,cost: string,quantity: string ){


  var url = this.apiUrl+"editOrder";
  return this.http.post(url,{id:id,customer:customer,status:status,order_date:order_date,product_name:product_name,cost:cost,quantity:quantity},
    {headers:new HttpHeaders ({"content-Type":"application/json"})});

}


delete(val : number) {
  var url = this.apiUrl+"delete";
  return this.http.post(url,{id:val},
    {headers:new HttpHeaders ({"content-Type":"application/json"})});
}




addOrder(customer : string ,status: string ,order_date: string, product_name: string,cost: string,quantity: string ){


  var url = this.apiUrl+"addOrder";

  return this.http.post(url,{customer:customer,status:status,order_date:order_date,product_name:product_name,cost:cost,quantity:quantity},
    {headers:new HttpHeaders ({"content-Type":"application/json"})});


}





}
