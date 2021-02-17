import { NgModule } from '@angular/core';
import { NgxColorPageComponent } from './ngx-color-page.component';
import { NgxColorPickerModule } from './ngx-color-picker.module';

@NgModule({
  imports: [NgxColorPickerModule],
  declarations: [NgxColorPageComponent],
  exports: [NgxColorPageComponent]
})
export class NgxColorPageComponentModule {
}
