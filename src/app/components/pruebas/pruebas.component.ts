import { Component } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';


@Component({
  selector: 'app-pruebas',
  standalone: true,
  imports:  [MatFormFieldModule, MatSelectModule],
  templateUrl: './pruebas.component.html',
  styleUrl: './pruebas.component.css'
})
export class PruebasComponent {

}
