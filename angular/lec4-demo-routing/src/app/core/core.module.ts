import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalLoaderComponent } from './global-loader/global-loader.component';
import { SharedModule } from '../shared/shared.module';
import { NavigationComponent } from './navigation/navigation.component';
import { RouterModule } from '@angular/router';

// Components only instanced once - lader footer general pop-up header footer

@NgModule({
  declarations: [
    GlobalLoaderComponent,
    NavigationComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
  ],
  exports: [
    GlobalLoaderComponent,
    NavigationComponent,
  ]
})
export class CoreModule { }
