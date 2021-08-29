import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminModule } from './admin/admin.module';
import { AdminGuard } from './core/guards/admin.guard';
import { MainModule } from './main/main.module';

const routes: Routes = [
  { path: 'admin', canActivate: [AdminGuard], loadChildren: () => AdminModule },

  { path: '', loadChildren: () => MainModule },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
