import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgxColorPageComponent } from '../test-environments/ngx-color/ngx-color-page.component';
import { ColorPickrPageComponent } from '../test-environments/color-pickr/color-pickr-page.component';
import { ColorPickrPageComponentModule } from '../test-environments/color-pickr/color-pickr-page-component.module';
import { NgxColorPageComponentModule } from '../test-environments/ngx-color/ngx-color-page-component.module';

const routes: Routes = [
  {  path: 'ngx-color', component: NgxColorPageComponent},
  {  path: 'color-pickr', component: ColorPickrPageComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes), ColorPickrPageComponentModule, NgxColorPageComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
