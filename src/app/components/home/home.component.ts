import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';
import {Response} from 'src/app/models/response';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 productSub;
 products;

  constructor(private productServices: ProductsService) { }

  ngOnInit(): void {

   this.productSub = this.productServices.getProducts().subscribe(

     (response: Response) => {
       this.products = response.result; },

       (error) =>  {console.log("Erreur : "+error);
       }
   )

  }

}
