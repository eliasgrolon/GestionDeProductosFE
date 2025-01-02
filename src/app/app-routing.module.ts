import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EditarProductoComponent } from './editar-producto/editar-producto.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'editar-producto', component: EditarProductoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
