import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private editarUrl = 'http://localhost:5110/api/Editar/Editar'; // URL de tu API

  constructor(private http: HttpClient) { }

  editarProducto(datos: any): Observable<any> {
    return this.http.put(this.editarUrl, datos);
  }
}
