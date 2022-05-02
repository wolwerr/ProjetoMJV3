import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Coment } from 'src/app/features/students/models/coment.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  coment?: Coment;

  constructor(private router: Router) { }

  ngOnInit(): void {
    const comentStorage = sessionStorage.getItem('coment');
    if(comentStorage) {
      this.coment = JSON.parse(comentStorage);
    }
  }

  navigateByUrl(url: string) {
    this.router.navigateByUrl(url);
  }

  exit() {
    sessionStorage.clear();
    this.navigateByUrl('/login');
  }


}
