import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Coment } from '../../models/coment.model';
import { ComentsService } from '../../services/coments.service';

@Component({
  templateUrl: './create-coment-page.component.html',
  styleUrls: ['./create-coment-page.component.scss']
})
export class CreateComentPageComponent implements OnInit {

  coment: Coment = this.comentsService.getDefaultComent();

  comentForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    coment: new FormControl('', [Validators.required]),
    inclusionDate: new FormControl(this.coment.inclusionDate),
  });

  constructor(
    private comentsService: ComentsService,
    private router: Router) { }

  ngOnInit(): void {
    this.comentForm.controls.inclusionDate.disable();
  }

  onSubmit() {
    const formValue = this.comentForm.value;
    this.coment.name = formValue.name;
    this.coment.email = formValue.email;
    this.coment.password = formValue.password;
    this.coment.coment = formValue.monthlyPayment;;
    this.comentsService.createComent(this.coment);
    alert('Comentário adicionado com sucesso!');
    this.router.navigateByUrl('/coments');
  }

}
