import { MovieListComponent } from './movie-list/movie-list.component';
import { ConfirmEqualValidatorDirective } from './../core/shared/confirm-equal-validator.directive';
import { ComponentsModule } from 'src/app/components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { MaterialModule } from '../core/material/material.module';

@NgModule({
  declarations: [
    MainLayoutComponent,
    SigninComponent,
    SignupComponent,
    MovieListComponent,
    ConfirmEqualValidatorDirective,
  ],
  imports: [CommonModule, MainRoutingModule, ComponentsModule, MaterialModule],
})
export class MainModule {}
