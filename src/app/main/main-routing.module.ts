import { MovieListModule } from './movie-list/movie-list.module';
import { MovieDetailModule } from './movie-detail/movie-detail.module';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckoutGuard } from '../core/guards/checkout.guard';
import { CheckoutModule } from './checkout/checkout.module';
import { HomeModule } from './home/home.module';
import { MainLayoutComponent } from './main-layout/main-layout.component';

const routes: Routes = [
  {
    path: 'checkout',
    canActivate: [CheckoutGuard],
    loadChildren: () => CheckoutModule,
  },

  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', pathMatch: 'full', loadChildren: () => HomeModule },
      { path: 'movie/:movieId', loadChildren: () => MovieDetailModule },
      { path: 'dangnhap', component: SigninComponent },
      { path: 'dangky', component: SignupComponent },
      { path: 'phim', loadChildren: () => MovieListModule },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
