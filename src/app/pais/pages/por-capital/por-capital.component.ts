import { Component } from '@angular/core';

import { Country } from '../../interfaces/interfacePais';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  constructor(private PaisService: PaisService){}
  public resultados: Country[] = [];
  hayError: boolean = false;
  capital :string = "";



  buscar (pais:string){
    if(pais.trim().length===0){
      return;
    }
    this.hayError = false;
    this.capital = pais;
    this.PaisService.buscarPaisV3("/capital/"+pais).subscribe(resp =>{
      this.resultados = resp;
      console.log (this.resultados);
    },(err =>{
      this.hayError = true;
      console.log(err);
    }));
  }




}
