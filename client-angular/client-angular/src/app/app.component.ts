import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'; //HTTP CLIENT
import { Products } from './products.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone:true,
  imports:   
 [CommonModule]
})
export class AppComponent implements OnInit{
  title = 'client-angular'
  products: Products[] = [];
    constructor(private http: HttpClient) {}

  ngOnInit(): void {
  
    this.http.get<{products: Products[]}>('https://3000-raffomagno-fullwebsitep-iebor3eetso.ws-eu116.gitpod.io/api/products')
      .subscribe({

        next: (response) => {
          this.products = response.products;
          console.log('Received data:', this.products);
        },
        error: (error) => {
          console.error('Error fetching data:', error);
        }
      });
  }


}