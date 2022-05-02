import { Component, Input, OnInit } from '@angular/core';
import { Coment } from '../../models/coment.model';

@Component({
  selector: 'app-coment',
  templateUrl: './coment.component.html',
  styleUrls: ['./coment.component.scss']
})
export class ComentComponent implements OnInit {

  @Input()
  coment?: Coment;

  @Input()
  card: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
