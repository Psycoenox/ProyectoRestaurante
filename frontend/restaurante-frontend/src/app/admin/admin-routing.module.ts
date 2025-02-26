import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { ReservationsComponent } from './pages/reservations/reservations.component';
import { AdminGuard } from './guards/admin.guard';

const routes: Routes = [
  { path: '', component: DashboardComponent, canActivate:[AdminGuard] }, // ✅ Página principal del admin
  { path: 'orders', component: OrdersComponent,canActivate:[AdminGuard] }, // ✅ Página de pedidos
  { path: 'reservations', component: ReservationsComponent,canActivate:[AdminGuard] } // ✅ Página de reservas
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
