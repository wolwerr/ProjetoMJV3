import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CpfPipe } from './pipes/cpf.pipe';
import { RedDirective } from './directives/red.directive';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


const components = [
  HeaderComponent,
  FooterComponent
];

const pipes = [CpfPipe];

const directives = [RedDirective];

@NgModule({
  declarations: [
    ...components,
    ...pipes,
    ...directives
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule
  ],
  exports: [
    ...components,
    ...pipes,
    ...directives
  ]
})
export class SharedModule {
 }
