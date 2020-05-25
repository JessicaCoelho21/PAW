import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Product } from '../Models/product';

const endpoint = 'http://localhost:3000/api/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(endpoint + 'products/');
  }

  getProduct(id: String): Observable<Product> {
    return this.http.get<Product>(endpoint + 'products/' + id)
  }

  addProduct(product: Product): Observable<Product> {
    console.log(product);
    return this.http.post<Product>(endpoint + 'products/', JSON.stringify(product), httpOptions);
  }

  updateProduct(id: string, product: Product): Observable<Product> {
    return this.http.put<Product>(endpoint + 'products/' + id, JSON.stringify(product), httpOptions);
  }

  deleteProduct(id: string): Observable<Product> {
    return this.http.delete<Product>(endpoint + 'products/' + id, httpOptions);
  }

}