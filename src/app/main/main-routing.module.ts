import { SignupGuard } from './../core/guards/signup.guard';
import { SigninGuard } from '../core/guards/signin.guard';
import { TheaterModule } from './theater/theater.module';
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
import { EventComponent } from './event/event.component';

const routes: Routes = [
  {
    path: 'datve/:maLichChieu',
    canActivate: [CheckoutGuard],
    loadChildren: () => CheckoutModule,
  },

  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', pathMatch: 'full', loadChildren: () => HomeModule },
      { path: 'movie/:movieId', loadChildren: () => MovieDetailModule },
      {
        path: 'dangnhap',
        canDeactivate: [SigninGuard],
        component: SigninComponent,
      },
      {
        path: 'dangky',
        canDeactivate: [SignupGuard],
        component: SignupComponent,
      },
      { path: 'phim', loadChildren: () => MovieListModule },
      { path: 'sukien', component: EventComponent },
      { path: 'rap', loadChildren: () => TheaterModule },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
