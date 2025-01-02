import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-editar-producto',
  standalone: false,
  
  templateUrl: './editar-producto.component.html',
  styleUrl: './editar-producto.component.css'
})
export class EditarProductoComponent {
  producto = {
    idProducto: null,
    codigoBarra: '',
    nombre: '',
    marca: '',
    categoria: '',
    precio: null
  };

  constructor(private apiService: ApiService) {}

  editarProducto() {
    this.apiService.editarProducto(this.producto).subscribe(
      response => {
        alert(response.mensaje); // Mostrar el mensaje de éxito
      },
      error => {
        alert('Error: ' + error.message); // Mostrar el error
      }
    );
  }
}