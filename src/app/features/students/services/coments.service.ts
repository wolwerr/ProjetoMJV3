import { Injectable } from '@angular/core';
import { Coment } from '../models/coment.model';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class ComentsService {

  coments: Array<Coment> = [
    {
      id: 1,
      name: 'Ricardo Machado',
      email: 'ricardo@dtmm.com.br',
      password: '123456',
      coment: 'Very good site',
      inclusionDate: '2021-07-24',
      validRegistration: true,
    },
    {
      id: 2,
      name: 'Diogo Machado',
      email: 'diogo@dtmm.com.br',
      password: '123456',
      coment: 'Beatilful site',
      inclusionDate: '2022-01-10',
      validRegistration: true,
    },
    {
      id: 3,
      name: 'Theo Machado',
      email: 'theo@dtmm.com.br',
      password: '123456',
      coment: 'Very nice, congrats',
      inclusionDate: '2022-03-14',
      validRegistration: true,
    }
  ];

  constructor() { }

  getDefaultComent(): Coment {
    const dateToday = moment().format('YYYY/MM/DD');
    return {
      id: this.generateNextId(),
      name: '',
      email: '',
      password: '',
      coment: '',
      inclusionDate: dateToday,
      validRegistration: true,
    }
  }
  getComents() {
    return this.coments;
  }

  getComentByEmailAndPassword(email: string | undefined, password: string | undefined) {
    return this.coments.find((coment) => coment.email === email && coment.password === password);
  }

  getComentById(id: number) {
    return this.coments.find((coment) => coment.id === Number(id));
  }

  getComentByName(name: string) {
    return this.coments.find((coment) => coment.name === name);
  }

  getComentsByFilterName(name: string) {
    return this.coments.filter((coment) => coment.name.toUpperCase().search(name.toUpperCase()) > -1);
  }

  getComentsByFilterId(id: number) {
    const coment = this.getComentById(Number(id));
    if(!coment) {
      return [];
    }
    return [coment];
  }

  createComent(coment: Coment) {
    this.coments.push(coment);
    return this.coments;
  }

  generateNextId(): number {
    return this.coments[(this.coments.length - 1)].id + 1;
  }
}
