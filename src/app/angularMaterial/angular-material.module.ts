import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

const angularMaterial = [MatButtonModule];

@NgModule({
  declarations: [],
  imports: [CommonModule, angularMaterial],
  exports: [angularMaterial],
})
export class AngularMaterialModule {}
