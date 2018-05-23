import { Component, OnInit } from '@angular/core';

import { TesteService } from './teste.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: string[];

  constructor(public testeService: TesteService) {

    this.cursos = this.testeService.getCursos();

  }

  ngOnInit() {
  }

}
