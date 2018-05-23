import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';
import { TesteService } from './teste.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CursosComponent
  ],
  providers: [ TesteService ]
})
export class CursosModule { }
