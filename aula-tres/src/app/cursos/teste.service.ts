import { Injectable } from '@angular/core';

@Injectable()
export class TesteService {

  constructor() { }

  getCursos() {
    return ['Java', 'angular', 'php'];
  }
}
