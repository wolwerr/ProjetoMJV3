import { Component, Input, OnInit } from '@angular/core';
import { Coment } from '../../models/coment.model';

@Component({
  selector: 'app-coment-list',
  templateUrl: './coment-list.component.html',
  styleUrls: ['./coment-list.component.scss']
})
export class ComentListComponent implements OnInit {

  @Input()
  coments: Array<Coment> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
