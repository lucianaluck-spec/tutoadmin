import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnterToTabDirective } from '@/enter-to-tab.directive';

@NgModule({
  declarations: [
    EnterToTabDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    EnterToTabDirective, // 2. Exporta a diretiva
    CommonModule // Boa prática: re-exportar CommonModule
  ]
})
export class SharedDirectiveModule { }
