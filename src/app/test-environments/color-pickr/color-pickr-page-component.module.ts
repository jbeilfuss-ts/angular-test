import { NgModule } from '@angular/core';
import { ColorPickrPageComponent } from './color-pickr-page.component';
import { TsColorPickerComponent } from './ts-color-picker/ts-color-picker.component';

@NgModule({
  declarations: [ColorPickrPageComponent, TsColorPickerComponent],
  exports: [ColorPickrPageComponent]
})
export class ColorPickrPageComponentModule{
}
