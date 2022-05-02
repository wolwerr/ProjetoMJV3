import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComentsService } from 'src/app/features/students/services/coments.service';

@Component({
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  error: boolean = false;

  email?: string;
  password?: string;

  constructor(
    private comentService: ComentsService,
    private router: Router) { }

  ngOnInit(): void {
  }

  authenticate() {
    const coment = this.comentService.getComentByEmailAndPassword(this.email, this.password);
    if (!coment) {
      this.error = true;
    } else {
      delete coment.password;

      sessionStorage.setItem('coment', JSON.stringify(coment));

      this.router.navigateByUrl('coments');
    }

  }

}
