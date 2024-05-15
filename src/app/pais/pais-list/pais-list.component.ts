import { Component, OnInit } from '@angular/core';
import { Pais } from '../pais';
import { PaisService } from '../pais.service';


@Component({
 selector: 'app-pais-list',
 templateUrl: './pais-list.component.html',
 styleUrls: ['./pais-list.component.css']
})
export class PaisListComponent implements OnInit {

 paises: Array<Pais> = [];
 selectedPais!: Pais;
 selected = false;

 paisViejo: string = "";
 anoViejo: number = 10000;

 constructor(private paisService: PaisService) { }

 getPaises(): void {
   this.paisService.getPaises().subscribe((paises) => {
     this.paises = paises;
     this.updatePaisViejo()
    });
 }

updatePaisViejo(): void {
  this.paises.forEach((pais) => {
    if (pais.formation_year < this.anoViejo) {
      this.paisViejo = pais.name;
      this.anoViejo = pais.formation_year;
    }
  });
}
 
 onSelected(pais: Pais): void {
  this.selected = true;
  this.selectedPais = pais;
}

 ngOnInit() {
   this.getPaises();
 }

}