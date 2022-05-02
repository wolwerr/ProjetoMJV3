import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Coment } from '../../models/coment.model';
import { ComentsService } from '../../services/coments.service';

@Component({
  templateUrl: './coment-details-page.component.html',
  styleUrls: ['./coment-details-page.component.scss']
})
export class ComentDetailsPageComponent implements OnInit {

  coment?: Coment;

  constructor(
    private comentsService: ComentsService,
    private activedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.activedRoute.params.subscribe((params) => {
      console.log(params.id);
      this.coment = this.comentsService.getComentById(params.id);
    });
  }

}
