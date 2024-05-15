import { Component } from '@angular/core';
import { Pais } from '../pais';

@Component({
  selector: 'app-pais-list',
  templateUrl: './pais-list.component.html',
  styleUrl: './pais-list.component.css'
})
export class PaisListComponent {
  books: Array<Pais> = [];
  constructor() { }

 ngOnInit() {
 }
 
}
