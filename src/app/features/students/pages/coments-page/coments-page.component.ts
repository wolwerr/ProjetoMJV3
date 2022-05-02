import { Component, OnInit } from '@angular/core';
import { Coment } from '../../models/coment.model';
import { ComentsService } from '../../services/coments.service';

@Component({
  templateUrl: './coments-page.component.html',
  styleUrls: ['./coments-page.component.scss']
})
export class ComentsPageComponent implements OnInit {

  coments: Array<Coment> = [];

  filteredComents: Array<Coment> = [];

  constructor(private comentsService: ComentsService) { }

  ngOnInit(): void {
    this.coments = this.comentsService.getComents();
    this.filteredComents = this.coments;
  }

  findComentByFilter(event: any, type: 'Name' | 'Id') {
    const value = event.target.value;
    const coments = type === 'Id' ? this.comentsService.getComentsByFilterId(value) : this.comentsService.getComentsByFilterName(value);
    if(value.length === 0) {
      return this.filteredComents = this.coments;
    }
    return this.filteredComents = coments;
  }

}
